var batman = document.getElementById("batman");
var velocidadDer = 10;
var velocidadIzq = 10;
var velocidadArriba = 10;
var velocidadAbajo = 10;
var marginLeft = 0;
var marginTop = 0;
var marginRight = 0;
var marginDown = 0;
var izquierda = 0;


document.addEventListener("keydown",function (e) {
   if (e.keyCode == "39" ) {
        
       moverDerecha();            
    }
    if (e.keyCode == "37") {
        
        moverIzquierda()
        
    }
    if (e.keyCode == "38") {
       moverAbajo(); 
       
    } 
    if (e.keyCode == "40") {
        moverArriba();
       
    }
})

function moverDerecha() {
    marginLeft = marginLeft + velocidadDer;
    batman.style.marginLeft = marginLeft + "px";
}

function moverIzquierda() {
    marginLeft = marginLeft + velocidadIzq;
    batman.style.marginLeft = marginRight + "px";
}

function moverArriba() {
    marginTop = marginTop + velocidadArriba;
    batman.style.marginTop = marginTop + "px";    
}

function moverAbajo() {
    marginTop = marginTop + velocidadAbajo;
    batman.style.marginTop = marginDown + "px";    
}



let calavera = document.getElementById("calavera");
let veloocidad = 50;

//var velocidadDer = 10;
//var velocidadIzq = 10;
let marginTop = 0;
let marginLeft = 0;

document.addEventListener("keydown",function (e) {
    if (e.keyCode == "39") {
        moverDerecha();
    }
})

window.onload = function (params) {
    console.log("hola mundo")
}

    marginLeft = marginLeft + velocidadIzq;
    calavera.style.marginLeft = marginRight + "px";

var estado = false;
var button = document.getElementById("button");
var batman = document.createElement("batman")



button.addEventListener("button",iniciar)
function frame () {
    bucle = requestAnimationFrame(frame);
}


function iniciar() {
    if (estado) {

        estado = true;
        frame();

    } else {

        estado = false;
        cancelAnimationFrame(bucle);
    }
}
