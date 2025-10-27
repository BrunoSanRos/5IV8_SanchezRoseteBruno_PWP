
/*  
var x = "hola";
if(true){
    let x = "habia una vez";
    console.log(x);
}




//como usamos las funciones

function suma(n1, n2){
    return n1 + n2;
}
console.log(`Esta suma es de: ${suma(5,3)}`) ;

//las funciones flecha, nos ayudan a poder realizar operaciones de una forma mucho mas sencilla , de acuerdo a la siguiente estructura

//"cadena " -> id,clase,nmbre atributo

const suma = (n1, n2) => n1 + n2;
console.log(`Esta suma es de${suma(5,3)} `);



const razasDePerros = [
    "Pastor Aleman",
    "Labrador Retriever",
    "Bulldog Frances",
    "Beagle",
    "Chihuahua",
    "Salchicha",
    "Pug"

];

for(let i = 0 ;  i < razasDePerros.length; i++){

    console.log(razasDePerros[i]);
}


//for of

for(const raza of razaDePerros){
    console.log(raza);
}
//for in

for(const indice in razaDePerros){
    console.log(razaDePerros[indice]);
}


//forEach intera sobre los elementis dek arregki y no devuelve nada
razaDePerros.forEach(raza => console.log(raza));
//la estructura general del forEach es la siguiente 
//argumento.forEach((raza, indice arreglo) => {codigo o ejecutar})


//funcion MAP -> integrar sobre los elements del arreglo, y regresa un arreglodiferente con el cual podemos jugar

const razasDePerros = razasDePerros.map(raza => raza.toUpperCasae());
console.log(razasDePerros);
console.log(razasDePerros);



//FIND -> nos permite realizar una busqieda de un elemento dentro del arreglo, si lo encuentra , lo retorna sino lanza "undefined"

if(razasDePerros.find(raza => raza === "Chihuahua")){

    console.log("Si se encontro la raza");
    console.log(razasDePerros)


}else{

    razasDePerros.push("Chihuahua");
    console.log(razasDePerros);
}

*/

//permite realiza una busqueda de un el dentro del arreglo, si lo encuentra, regresa el indice del elementim sino regresa un -1, esta funcion es particularmente util cuando necesitramos modificar o elimnar de un arreglo original dentri de una copia del mismo

function calcularOperacion() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;
    let operacion;

    if (num1 === num2) {
        resultado = num1 * num2;
        operacion = "multiplicación";
    } else if (num1 > num2) {
        resultado = num1 - num2;
        operacion = "resta";
    } else {
        resultado = num1 + num2;
        operacion = "suma";
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
    document.getElementById('resultadoOp').textContent = `Resultado: ${resultado}`;
}

function encontrarMayor() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);
    const mayor = Math.max(n1, n2, n3);

    alert(`El número mayor entre ${n1}, ${n2} y ${n3} es: ${mayor}`);
    document.getElementById('resultadoMayor').textContent = `El número mayor es: ${mayor}`;
}

function calcularHorasExtra() {
    const horasTotales = parseFloat(document.getElementById('horasTrabajadas').value);
    const pagoPorHora = parseFloat(document.getElementById('pagoPorHora').value);
    let pagoExtra = 0;
    let mensaje = "";

    if (horasTotales > 40) {
        const horasExtra = horasTotales - 40;
        if (horasExtra <= 8) {
            pagoExtra = horasExtra * (pagoPorHora * 2);
            mensaje = `${horasExtra} horas extras al doble`;
        } else {
            pagoExtra = (8 * (pagoPorHora * 2)) + ((horasExtra - 8) * (pagoPorHora * 3));
            mensaje = `8 horas al doble y ${horasExtra - 8} horas al triple`;
        }
    }

    alert(`Pago por horas extra: $${pagoExtra.toFixed(2)}\n${mensaje}`);
    document.getElementById('resultadoHoras').textContent = 
        `Pago por horas extra: $${pagoExtra.toFixed(2)}`;
}

function calcularUtilidades() {
    const salario = parseFloat(document.getElementById('salarioMensual').value);
    const antiguedad = document.getElementById('antiguedad').value;
    let porcentaje;

    switch(antiguedad) {
        case "0": porcentaje = 0.05; break;
        case "1": porcentaje = 0.07; break;
        case "2": porcentaje = 0.10; break;
        case "5": porcentaje = 0.15; break;
        case "10": porcentaje = 0.20; break;
    }

    const utilidad = salario * 12 * porcentaje;
    alert(`Con un salario mensual de $${salario}\n` +
          `Y una antigüedad que corresponde al ${porcentaje*100}%\n` +
          `Su utilidad anual es: $${utilidad.toFixed(2)}`);
    
    document.getElementById('resultadoUtilidades').textContent = 
        `Utilidad anual: $${utilidad.toFixed(2)} (${porcentaje*100}%)`;
}