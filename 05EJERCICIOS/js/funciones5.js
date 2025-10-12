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
  document.getElementById("mujeres").value = "";
  document.getElementById("hombres").value = "";
  document.getElementById("porcentajeMujeres").value = "";
  document.getElementById("porcentajeHombres").value = "";
}

function calcularPorcentaje(){
  var cantidadMujeres = document.getElementById("mujeres").value;
  var cantidadHombres = document.getElementById("hombres").value;
  
  if(!cantidadMujeres || !cantidadHombres) {
    return alert('Por favor complete ambos campos');
  }
  
  var numeroMujeres = parseFloat(cantidadMujeres);
  var numeroHombres = parseFloat(cantidadHombres);
  
  if(numeroMujeres < 0 || numeroHombres < 0) {
    return alert('Las cantidades no pueden ser negativas');
  }
  
  // Calcular total de estudiantes
  var totalEstudiantes = numeroMujeres + numeroHombres;
  
  if(totalEstudiantes === 0) {
    return alert('Debe haber al menos un estudiante');
  }
  
  // Calcular porcentaje de mujeres
  var porcentajeMujeres = (numeroMujeres / totalEstudiantes) * 100;
  
  // Calcular porcentaje de hombres
  var porcentajeHombres = (numeroHombres / totalEstudiantes) * 100;
  
  document.getElementById("porcentajeMujeres").value = porcentajeMujeres.toFixed(2) + "%";
  document.getElementById("porcentajeHombres").value = porcentajeHombres.toFixed(2) + "%";
}