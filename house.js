var startX
var startY
var endX
var endY
var treshold = 50; //this sets the minimum swipe distance, to avoid noise and to filter actual swipes from just moving fingers
//var style = document.createElement("style"); //Only for design purposes
//document.body.appendChild(style);

//Function to handle swipes
function handleTouch(start,end, cbL, cbR){
  //calculate the distance on x-axis and o y-axis. Check wheter had the great moving ratio.
  var xDist = endX - startX;
  var yDist = endY - startY;
  console.log(xDist);
  console.log(yDist);
if (Math.abs(xDist)> treshold){
	window.open ('indexSuperior.html','_self',false)
}

if (Math.abs(yDist)> treshold){
	window.open ('indexSuperior.html','_self',false)
}
   if(endX - startX < 0){
      cbL();
    }else{
      cbR();
    }
}

//writing the callback fn()
var left = () =>{
}
var right = () =>{
}
var up = () =>{
}
var down = () =>{
}

//configs the elements on load
window.onload = function(){
 window.addEventListener('touchstart', function(event){
   //console.log(event);
   startX = event.touches[0].clientX;
   startY = event.touches[0].clientY;
   console.log(`the start is at X: ${startX}px and the Y is at ${startY}px`)

 })

window.addEventListener('touchend', function(event){
   //console.log(event);
   endX = event.changedTouches[0].clientX;
   endY = event.changedTouches[0].clientY;
   console.log(`the start is at X: ${endX}px and the Y is at ${endY}px`)

   handleTouch(startX, endX, left, right)

 })
}





//var a = 1
//if(a==1){
//javascript:location.reload(true)
//a=2
//javascript:location.reload(false)
//}


// States are mostly <polygon>s here, but some are <path> and some are a <g> of multiple things. Targetting the direct decendenants easiest.
var area1Status = 0;
var area2Status = 0;
var area3Status = 0;

var area1 = document.getElementById("area1");
var area2 = document.getElementById("area2");
var area3 = document.getElementById("area3");
var area4 = document.getElementById("area4");
var area5 = document.getElementById("area5");
var area6 = document.getElementById("area6");
var area7 = document.getElementById("area7");



var lampada1 = document.getElementById("lampada1");
var lampada2 = document.getElementById("lampada2");
var lampada3 = document.getElementById("lampada3");
var lampada4 = document.getElementById("lampada4");
var lampada5 = document.getElementById("lampada5");
var lampada6 = document.getElementById("lampada6");
var lampada7 = document.getElementById("lampada7");
var lampada8 = document.getElementById("lampada8");
var lampada9 = document.getElementById("lampada9");
var lampada10 = document.getElementById("lampada10");

var segundoAndar = document.getElementById("segundoAndar");

segundoAndar.addEventListener("click", SegundoAndar);


function SegundoAndar(evt){
  window.open ('indexSuperior.html','_self',false)
}


function ReloadStatus(){

//Sala de Jantar
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //console.log(myObj.Status.Power)
        if (myObj.Status.Power == 1) {
            lampada5.setAttribute("class", "on");
            lampada6.setAttribute("class", "on");
            lampada7.setAttribute("class", "on");
            lampada8.setAttribute("class", "on");
            lustre1.setAttribute("class", "on");

            area2Status = 1;
        }else{
	    lampada5.setAttribute("class", "off");
            lampada6.setAttribute("class", "off");
            lampada7.setAttribute("class", "off");
            lampada8.setAttribute("class", "off");
            lustre1.setAttribute("class", "off");

            area2Status = 0;
	}
    }
};
xhr.open('GET', "http://192.168.25.31/cm?cmnd=status", true);
xhr.send();

//Garagem
var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //console.log("aqui")
        //console.log(myObj.Status.Power)
        if (myObj.Status.Power == 1) {
            lampada1.setAttribute("class", "on");
            lampada2.setAttribute("class", "on");
            lampada3.setAttribute("class", "on");
            lampada4.setAttribute("class", "on");


            area1Status = 1;
        }else{
            lampada1.setAttribute("class", "off");
            lampada2.setAttribute("class", "off");
            lampada3.setAttribute("class", "off");
            lampada4.setAttribute("class", "off");


            area1Status = 0;

	}
    }
};
xhr1.open('GET', "http://192.168.25.30/cm?cmnd=status", true);
xhr1.send();



//Churrasqueira
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //console.log("aqui")
        //console.log(myObj.Status.Power)
        if (myObj.Status.Power == 1) {
            lampada9.setAttribute("class", "on");
            lampada10.setAttribute("class", "on");

            area3Status = 1;
        }else{
	    lampada9.setAttribute("class", "off");
            lampada10.setAttribute("class", "off");

            area3Status = 0;
	}
    }
};
xhr2.open('GET', "http://192.168.25.32/cm?cmnd=status", true);
xhr2.send();

console.log("REloaded")
}
ReloadStatus();

var reload = document.getElementById("reload");
reload.addEventListener("click", ReloadStatus);


// Area 1------------------------------------
area1.addEventListener("click", area1Click);
function area1Click() {
    //console.log("area1")
    area1Status = !area1Status;
    if (area1Status == true) {
        lampada1.setAttribute("class", "on");
        lampada2.setAttribute("class", "on");
        lampada3.setAttribute("class", "on");
        lampada4.setAttribute("class", "on");
	var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.30/cm?cmnd=Power%20On", true);
        xhr.send();

    } else {
        lampada1.setAttribute("class", "off");
        lampada2.setAttribute("class", "off");
        lampada3.setAttribute("class", "off");
        lampada4.setAttribute("class", "off");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.30/cm?cmnd=Power%20Off", true);
        xhr.send();

    }
}

// Area 2------------------------------------
area2.addEventListener("click", area2Click);
area3.addEventListener("click", area2Click);
area4.addEventListener("click", area2Click);

function area2Click() {
    area2Status = !area2Status;
    if (area2Status == true) {
        lampada5.setAttribute("class", "on");
        lampada6.setAttribute("class", "on");
        lampada7.setAttribute("class", "on");
        lampada8.setAttribute("class", "on");
        lustre1.setAttribute("class", "on");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.31/cm?cmnd=Power%20On", true);
        xhr.send();
    } else {
        lampada5.setAttribute("class", "off");
        lampada6.setAttribute("class", "off");
        lampada7.setAttribute("class", "off");
        lampada8.setAttribute("class", "off");
        lustre1.setAttribute("class", "off");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.31/cm?cmnd=Power%20Off", true);
        xhr.send();
    }
}

// Area 3------------------------------------
area5.addEventListener("click", area3Click);
area6.addEventListener("click", area3Click);
area7.addEventListener("click", area3Click);

function area3Click() {
    area3Status = !area3Status;
    if (area3Status == true) {
        lampada9.setAttribute("class", "on");
        lampada10.setAttribute("class", "on");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.32/cm?cmnd=Power%20On", true);
        xhr.send();
    } else {
        lampada9.setAttribute("class", "off");
        lampada10.setAttribute("class", "off");
	var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.32/cm?cmnd=Power%20Off", true);
        xhr.send();
    }
}
