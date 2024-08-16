let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMmaximo = 10; 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function Verificarintento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
   if (numeroDeUsuario === numeroSecreto) {
   asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
   document.getElementById("reiniciar").removeAttribute("disabled");
} else {
     //El usuario no acerto
       
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El numero secreto es menor");
    } else {
        asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarcaja();
   }
return;  
}

function limpiarcaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMmaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
// si el numero generado esta en la lista
// ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMmaximo) {
    asignarTextoElemento("p", "ya se sortearon todos los numeros posibles"); 
} else { 
 if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
 } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}

}
function condicionesIniciales(){
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p",`indica un numero del 1 al ${numeroMmaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =  1;
}

function reiniciarjuego() {
//limpiar caja 
limpiarcaja();
//indicar mensajede intervalo de numeros
condicionesIniciales();
//generar el numero aleatorio
//inicializar el numero de intentos
//Deshabiliar el boton de nuevo juego 
document.getElementById("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

