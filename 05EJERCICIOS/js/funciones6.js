function borrarCampos(){
  document.getElementById("fechaNacimiento").value = "";
  document.getElementById("edadCalculada").value = "";
}

function calcularEdad(){
  var fechaIngresada = document.getElementById("fechaNacimiento").value;
  
  if(!fechaIngresada) {
    return alert('Por favor ingrese su fecha de nacimiento');
  }
  
  
  var fechaActual = new Date();
  
 
  var fechaNac = new Date(fechaIngresada);
  
  
  if(fechaNac > fechaActual) {
    return alert('La fecha de nacimiento no puede ser futura');
  }
  

  var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  
 
  var mesActual = fechaActual.getMonth();
  var mesNacimiento = fechaNac.getMonth();
  
  // Ajustar la edad si aún no ha cumplido años este año
  if(mesActual < mesNacimiento) {
    edad--;
  } else if(mesActual === mesNacimiento) {
    // Si estamos en el mismo mes, verificar el día
    var diaActual = fechaActual.getDate();
    var diaNacimiento = fechaNac.getDate();
    
    if(diaActual < diaNacimiento) {
      edad--;
    }
  }
  
  document.getElementById("edadCalculada").value = edad + " años";
}