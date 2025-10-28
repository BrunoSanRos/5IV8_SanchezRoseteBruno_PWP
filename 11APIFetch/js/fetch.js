/* 
Este es un ejemplo de Api REST utilizando una llamada con fertch, eñlc ual sirve apara obtener informacion sobre el tipo de api, (pokemon) 
obtener su estructura y mostrarla en consola.
*/


const pokeApiURL = "https://pokeapi.co/api/v2/";

// vamos a crear una funcion para obtener todos los datos de la pokledex para esto tenemos que imaginar el orden y la obtencion de los datos


const pokedex = () => {

    //primero tenemos que obtener todas las estadisticas de los pokemones, asi que necesitamos crear una variable para almacenar la url de los pokemones

    const pokkemonStatsElements = {hp : document.getElementById("pokemonStatHP"), 
    attack : document.getElementById("pokemonStatAttack"),
    defense : document.getElementById("pokemonStatDefense"),
    specialAttack : document.getElementById("pokemonStatSpecialAttack"),
    specialDefense : document.getElementById("pokemonStatSpecialDefense"),
    speed : document.getElementById("pokemonStatSpeed")};

    let currentClassType = null;

    //tiene que cambiar los element

    const imageTemplate = "<img class='pokedisplay' src='{imgSrx}' alt='pokedisplay'/>";

    //necesitamos un objeto que se ancargue de guardar las rutas de las imagenes que vamos a cambiar dependiendo de si es una busqueda, si lo encontro o no al pokemon
    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    };

    //necesitamos una variable que guarde todos los contenedores de la pokedex


    const containers = {
        imagenContainer: document.getElementById("pokedisplay-container"),
        pokemonTypes: document.getElementById("pokemonType"),
        pokemonNameElement: document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement: document.getElementById("pokemonAbilities"),
        pokemonMoveElement: document.getElementById("pokemonMoves"),
        pokemonIdElement: document.getElementById("pokemonIdResult")
};

const buttons = {
    all : Array.from(document.getElementsByClassName("btn")),
    search : document.getElementById("btnSearch"),
    next : document.getElementById("btnUp"),
    previous : document.getElementById("btnDown")
};

//vamos a  buscar un pokemon necestiamos una variable que guarde el nombre del pokemon

const pokemonInput = document.getElementById("pokemonName");

const processPokemonType = (pokemonTypeData) => {
    //Primero necestimamos obtener el tipo de  pokemon, el nombre y la clase para que se modifique en el html, ya que tenmos eso, tenderemos que obtener satats, moves, abilities
    let pokemonTypes = "";

    const firstClass = pokemonTypeData[0].type.name;

    //necesitamos limpiar el contenedor de tipos de pokemon
    
    pokemonTypeData.types.forEach((pokemonTypeData) => {
        //necesito obtener la etiqueta de cada cambio 
        pokemonType += `<span class="type ${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;    
    });

    //para poder quitar y cambiar el contenedor dependiendo del tipo tengo que saber cual pertenece

    if (currentClassType) {
        containers.pokemonMoveElement.classList.remove(currentClassType);
        containers.pokemonAbilitiesElement.classList.remove(currentClassType);

    }//ahora agrego lo nuevo
    containers.pokemonMoveElement.classList.add(firstClass);
    containers.pokemonTypesContainer.innerHTML = pokemonTypes;

}

//ahora necestiamos obtener las estadisticas del pokemon

const processPokemonStats = (pokemonStatsData) => {
    pokemonData.stats?.forEach((pokemonstatData) => {
        
        //vamos a evaluar si encuentra el nombre de la estadistica para colocarlo en su contenedor correspondiente
        switch(pokemonstatData.stat.name){
            case "hp":
                pokkemonStatsElements.hp.innetHTML = pokemonstatData.base_stat;
                pokkemonStatsElements.hp.style = 'background: linear-gradient(0deg), rgba(0,118,255,1)${pokemonstatData.base_stat}%, rgba(0,0,0,1)${pokemonstatData.base_stat}%';
        }
    });
}

};