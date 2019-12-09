document.addEventListener('keydown', function(pulsar){
    if(pulsar.keyCode == 32){
        console.log("saltar");
        
        if(nivel.muerto == false)
        saltar();
        else {
           
            puntuacion = 0;
            
        }
    }
    });
     
    var batman;
    var bloque;
        
    var ancho = 1200;
    var alto = 500;
    
    var canvas,ctx;
    
    function inicializar(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    }
    
    function borrarCanvas(){
       canvas.width = ancho;
       canvas.height = alto;
    }
    var suelo = 350;
    var bruja = {y: suelo, vy:0, gravedad:2, salto:28, vymax:9, saltando: false};
    var nivel = {velocidad: 30,  muerto: false};
    var puntuacion = 0;
    var bat = {x:ancho + 100, y: suelo-0};
    
    
    function logicaBloque(){
       if(bloque.x < -100){
           bloque.x = ancho +100;
         puntuacion++;
       }
       else{
           bloque.x -= nivel.velocidad;
       }
    }
    
    
    function saltar(){
        batman.saltando = true;
        batman.vy = batman.salto;
    }
    
    function gravedad(){
        if(batman.saltando == true) {
    
            if(batman.y - batman.vy - batman.gravedad > suelo){
                batman.saltando= false;
                batman.vy = 0;
                batman.y = suelo;
            }
            else{
            batman.vy -= batman.gravedad;
            batman.y -= batman.vy;
            }
        }
    }
    
    function colision(){
       
    if(bloque.x >= 100 && bloque.x <= 165){
      if(batman.y >= suelo) {
          nivel.muerto = true;
          nivel.velocidad = 0;
          
      }
    }
    
    }
    
    function puntaje(){
        ctx.font = "30px impact";
        ctx.fillStyle = "555555";
        
    
        if(nivel.muerto == true){
            ctx.font = "60px impact";
            ctx.fillText( `GAME OVER`, 440, 250);
            ctx.fillText( `${puntuacion} `,600,50);
            console.log(puntuacion);
        }
    }
    
    
    
    //BUCLE PRINCIPAL
    var FPS = 50;
    setInterval(function(){
        principal();
    }, 1000/FPS);
    
    
    function principal(){
        borrarCanvas();
        gravedad();
        colision();
        logicaBloque();
        puntaje();
    }

setTimeout(function() {
	var h1= document.createElement('H1')
    h1.innerHTML = "GAME OVER"
	window.location.href = "./pantallaPrincipal.html"
},60000)