function validarn(evento){
  var tecla = (document.all) ? evento.keyCode : evento.which;
  if(tecla == 8){
    return true
  }
  var expresion = /[0-9\d .]/
  var caracter = String.fromCharCode(tecla);
  return expresion.test(caracter);
}

function borrarCampos(){
  document.getElementById("parcial1").value = "";
  document.getElementById("parcial2").value = "";
  document.getElementById("parcial3").value = "";
  document.getElementById("examen").value = "";
  document.getElementById("proyecto").value = "";
  document.getElementById("calificacionFinal").value = "";
}

function calificacion(){
  var primerParcial = document.getElementById("parcial1").value;
  var segundoParcial = document.getElementById("parcial2").value;
  var tercerParcial = document.getElementById("parcial3").value;
  var examenFinal = document.getElementById("examen").value;
  var trabajoFinal = document.getElementById("proyecto").value;
  
  if(!primerParcial || !segundoParcial || !tercerParcial || !examenFinal || !trabajoFinal) {
    return alert('Por favor complete todas las calificaciones');
  }
  
  var nota1 = parseFloat(primerParcial);
  var nota2 = parseFloat(segundoParcial);
  var nota3 = parseFloat(tercerParcial);
  var notaExamen = parseFloat(examenFinal);
  var notaProyecto = parseFloat(trabajoFinal);
  
  if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100) {
    return alert('Las calificaciones de los parciales deben estar entre 0 y 100');
  }
  
  if(notaExamen < 0 || notaExamen > 100) {
    return alert('La calificación del examen debe estar entre 0 y 100');
  }
  
  if(notaProyecto < 0 || notaProyecto > 100) {
    return alert('La calificación del proyecto debe estar entre 0 y 100');
  }
  
  var promedioParciales = (nota1 + nota2 + nota3) / 3;
  

  var valorParciales = promedioParciales * 0.55;
  
 
  var valorExamen = notaExamen * 0.30;
  
  var valorProyecto = notaProyecto * 0.15;
  
 
  var notaFinal = valorParciales + valorExamen + valorProyecto;
  
  document.getElementById("calificacionFinal").value = notaFinal.toFixed(2);
}