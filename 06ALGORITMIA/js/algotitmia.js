function problema1(){
  const entrada = document.getElementById('p1-input').value;
  const textoLimpio = entrada.trim();
  const palabras = textoLimpio.split(" ");
  const palabrasInvertidas = palabras.map((palabra) => {
    return palabra.split('').reverse().join('') });
  const resultado = palabrasInvertidas.toString();
  document.getElementById('p1-output').textContent = resultado;
}

function problema2(){
var p2_x1 = document.querySelector("#p2_x4").value;
var p2_x5 = document.querySelector("#p2_x5").value;

var p2_y1 = document.querySelector("#p2_y1").value;
var p2_y2 = document.querySelector("#p2_y2").value;
var p2_y3 = document.querySelector("#p2_y3").value;
var p2_y4 = document.querySelector("#p2_y4").value;
var p2_y5 = document.querySelector("#p2_y5").value;

//creamos los vectores

var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
var v1 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

//creamos el vector resultado

v1 = v1.sort(function(a, b){return b-a});
v2 = v2.sort(function(a, b){return b-a});

v2 = v2.reverse();

var p2_producto = 0;
for(var i=0; i< v1.length; i++){

  p2_producto += v1[i] * v2[i];
}

document.querySelector("#p2_resultado").textContent = "El producto escalar minimo es: " + p2_producto;

}

function problema3(){
  const entrada = document.getElementById('p3-input').value;
  const valores = entrada.trim().split(',');
  
  let palabraMayor = "";
  let cantidadMaxima = 0;
  
  valores.forEach(valor => {
    let caracteresUnicos = [];
    let letrasDelValor = valor.split('');
    
    letrasDelValor.forEach(caracter => {
      if(!caracteresUnicos.includes(caracter)) {
        caracteresUnicos.push(caracter);
      }
    });
    
    if(caracteresUnicos.length > cantidadMaxima){
      cantidadMaxima = caracteresUnicos.length;
      palabraMayor = valor;
    }
  });
  
  document.getElementById('p3-output').textContent = palabraMayor;
}