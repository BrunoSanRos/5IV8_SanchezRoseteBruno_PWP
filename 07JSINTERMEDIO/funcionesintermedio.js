
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

const indiceChihuahua = razasDePerros.findIndex(raza => raza === "Chihuahua");
if(indiceChihuahua > -1){
    //si se encontro y esat dentro del arreglo
    console.log(razasDePerros[indiceChihuahua]);
    //Agregue u texto a este resultado
    razasDePerros[indiceChihuahua] += "(Es una raza de perros chiquita y chillona)";
    console.log(razasDePerros[indiceChihuahua]);
    console.log(razasDePerros);
}