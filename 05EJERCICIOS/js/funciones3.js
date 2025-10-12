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
  document.getElementById("compra").value = "";
  document.getElementById("compraFinal").value = "";
}

function oferta(){
  var montoCompra = document.getElementById("compra").value;
  
  if(!montoCompra) return alert('Por favor ingrese el monto de la compra');
  
  var totalCompra = parseFloat(montoCompra);
  
  if(totalCompra <= 0) return alert('El monto debe ser mayor a 0');
  
 
  var porcentajeDescuento = 0.15;
  var descuentoAplicado = totalCompra * porcentajeDescuento;
  
  
  var pagoFinal = totalCompra - descuentoAplicado;
  
  document.getElementById("compraFinal").value = "$ " + pagoFinal.toFixed(2);
}