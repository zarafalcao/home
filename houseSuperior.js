
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
	window.open ('index.html','_self',false)
}

if (Math.abs(yDist)> treshold){
	window.open ('index.html','_self',false)
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




// States are mostly <polygon>s here, but some are <path> and some are a <g> of multiple things. Targetting the direct decendenants easiest.
var area1Status = 0;
var area2Status = 0;
var area3Status = 0;
var area4Status = 0;

var area1Superior = document.getElementById("area1Superior");
var area2BanheiroSuperior = document.getElementById("area2BanheiroSuperior");
var area2SalaSuperior = document.getElementById("area2SalaSuperior");
var area3SalaSuperior = document.getElementById("area3SalaSuperior");
var area4QuartoMeninosSuperior = document.getElementById("area4QuartoMeninosSuperior");

var lampada1Superir = document.getElementById("lampada1Superir");
var lampada2BanheiroSuperior = document.getElementById("lampada2BanheiroSuperior");
var lampada3BanheiroSuperior = document.getElementById("lampada3BanheiroSuperior");
var lampada4BanheiroSuperior = document.getElementById("lampada4BanheiroSuperior");
var lampada5SalaSuperior = document.getElementById("lampada5SalaSuperior");
var lampada6SalaSuperior = document.getElementById("lampada6SalaSuperior");
var lampada7QuartoMeninosSuperior = document.getElementById("lampada7QuartoMeninosSuperior");



var primeiroAndar = document.getElementById("primeiroAndar");

primeiroAndar.addEventListener("click", PrimeiroAndar);

function PrimeiroAndar(evt){
  window.open ('index.html','_self',false)
}

function ReloadStatus(){
//Suite Master
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        if (myObj.Status.Power == 1) {
            lampada1Superir.setAttribute("class", "on");

            area1Status = 1;
        }else{
            lampada1Superir.setAttribute("class", "off");

            area1Status = 0;
	}
    }
};
xhr.open('GET', "http://192.168.25.21/cm?cmnd=status", true);
xhr.send();


//Banheiro Superior
var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        if (myObj.Status.Power == 1) {
            lampada2BanheiroSuperior.setAttribute("class", "on");
            lampada3BanheiroSuperior.setAttribute("class", "on");
            lampada4BanheiroSuperior.setAttribute("class", "on");

            area2Status = 1;
        }else{
            lampada2BanheiroSuperior.setAttribute("class", "off");
            lampada3BanheiroSuperior.setAttribute("class", "off");
            lampada4BanheiroSuperior.setAttribute("class", "off");

            area2Status = 0;

	}

    }
};
xhr1.open('GET', "http://192.168.25.22/cm?cmnd=status", true);
xhr1.send();


//Sala Superior
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        if (myObj.Status.Power == 1) {
            lampada5SalaSuperior.setAttribute("class", "on");
            lampada6SalaSuperior.setAttribute("class", "on");

            area3tatus = 1;
        }else{

            lampada5SalaSuperior.setAttribute("class", "off");
            lampada6SalaSuperior.setAttribute("class", "off");

            area3tatus = 0;

	}
    }
};
xhr2.open('GET', "http://192.168.25.23/cm?cmnd=status", true);
xhr2.send();



//Quarto Meninos
var xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        if (myObj.Status.Power == 1) {
            lampada7QuartoMeninosSuperior.setAttribute("class", "on");

            area4tatus = 1;
        }else{
            lampada7QuartoMeninosSuperior.setAttribute("class", "off");

            area4tatus = 0;

	}
    }
};
xhr3.open('GET', "http://192.168.25.24/cm?cmnd=status", true);
xhr3.send();


}

ReloadStatus();
var reload = document.getElementById("reload");
reload.addEventListener("click", ReloadStatus);




// Area 1 Suite Master------------------------------------
area1Superior.addEventListener("click", area1Click);
function area1Click() {
    area1Status = !area1Status;
    if (area1Status == true) {
        lampada1Superir.setAttribute("class", "on");
	    var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.21/cm?cmnd=Power%20On", true);
        xhr.send();
    } else {
        lampada1Superir.setAttribute("class", "off");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.21/cm?cmnd=Power%20Off", true);
        xhr.send();
    }
}


// Area 2 Banheiro Superior------------------------------------
area2BanheiroSuperior.addEventListener("click", area2Click);
function area2Click() {
    area2Status = !area2Status;
    if (area2Status == true) {
        lampada2BanheiroSuperior.setAttribute("class", "on");
        lampada3BanheiroSuperior.setAttribute("class", "on");
        lampada4BanheiroSuperior.setAttribute("class", "on");
	    var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.22/cm?cmnd=Power%20On", true);
        xhr.send();
    } else {
        lampada2BanheiroSuperior.setAttribute("class", "off");
        lampada3BanheiroSuperior.setAttribute("class", "off");
        lampada4BanheiroSuperior.setAttribute("class", "off");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.22/cm?cmnd=Power%20Off", true);
        xhr.send();
    }
}


// Area 3 Sala Superior------------------------------------
area2SalaSuperior.addEventListener("click", area3Click);
area3SalaSuperior.addEventListener("click", area3Click);
function area3Click() {
    area3Status = !area3Status;
    if (area3Status == true) {
        lampada5SalaSuperior.setAttribute("class", "on");
        lampada6SalaSuperior.setAttribute("class", "on");
	    var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.23/cm?cmnd=Power%20On", true);
        xhr.send();
    } else {
        lampada5SalaSuperior.setAttribute("class", "off");
        lampada6SalaSuperior.setAttribute("class", "off");
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.23/cm?cmnd=Power%20Off", true);
        xhr.send();
    }
}


// Area 4 Quarto dos meninos----------------------------------
area4QuartoMeninosSuperior.addEventListener("click", area4Click);
function area4Click() {
    area4Status = !area4Status;
    if (area4Status == true) {
        lampada7QuartoMeninosSuperior.setAttribute("class", "on");

	var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.24/cm?cmnd=Power%20On", true);
        xhr.send();

    } else {
        lampada7QuartoMeninosSuperior.setAttribute("class", "off");

        var xhr = new XMLHttpRequest();
        xhr.open('GET', "http://192.168.25.24/cm?cmnd=Power%20Off", true);
        xhr.send();

    }
}
