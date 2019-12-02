var batman = document.getElementById("batman");
var velocidadDer = 150;
var velocidadIzq = 150;
var velocidadArriba = 150;
var velocidadAbajo = 180;
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
    marginLeft += velocidadDer;
    batman.style.marginLeft = marginLeft += "px";
    batman.style.left = parseInt(izquierda) + izquierda + "px" 
}

function moverIzquierda() {
    marginLeft += velocidadIzq;
    batman.style.marginLeft = marginRight += "px";
}

function moverArriba() {
    marginTop += velocidadArriba;
    batman.style.marginTop = marginTop += "px";    
}

function moverAbajo() {
    marginTop += velocidadAbajo;
    batman.style.marginTop = marginDown += "px";    
}
setTimeout(function() {
	var h1= document.createElement('H1')
    h1.innerHTML = "GAME OVER"
	window.location.href = "./pantallaPrincipal.html"
},60000)