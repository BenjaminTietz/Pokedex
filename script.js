let allPokemon = [];
let loadPokemonstart = 1;
let loadPokemonstop = 21;
let resultsOfSearch = [];

// This function loads first 20 pokemons from the API & pushes it into local JSON Array
async function loadPokemon () {
    for (let i = loadPokemonstart; i < loadPokemonstop; i++) {              // Loads first 20 Pokemons
    let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;     // url of API
    let response = await fetch(url);        // Request to server --> Data is getting loaded
    pokemons = await response.json();       // Transfers Text into JSON
    allPokemon.push(pokemons);              // pushes JSON in empty arry 'allPokemon'
    }
    renderPokemon(allPokemon);              // runs renderPokemon function
}

// This function loads another 20 pokemons from the API & pushes it into local JSON Array
function loadmorePokemon () {
    var element = document.getElementById('profile-main-loader');
    element.style.display = null;
    loadPokemonstart = loadPokemonstop;
    loadPokemonstop = loadPokemonstop + 20;
    loadPokemon();
}

// This function renders the fetched data from local array "allpokemon"
function renderPokemon(currentPokemon) {
    renderPokemon2();
}

// This function renders the searched & filtered Pokemons from local array "resultsOfSearch"
function renderfilteredPokemon(resultsOfSearch) {
    renderfilteredPokemon2();
}

// This function generates the ID of each Pokemon and adds 0´s infront
function generateID (i) {
    let pokemonID = allPokemon[i]['id'];
    let pokemonIDasString = pokemonID.toString();
    pokemonID = pokemonIDasString.padStart(3,"0");
    document.getElementById(`pokemonID${i}`).innerHTML += pokemonID;
}

// This function generates the ID of the seached Pokemons and adds 0´s infront
function generateIDsearchedPokemons (i) {
    let pokemonID = resultsOfSearch[i]['id'];
    let pokemonIDasString = pokemonID.toString();
    pokemonID = pokemonIDasString.padStart(3,"0");
    document.getElementById(`pokemonID${i}`).innerHTML += pokemonID;
}

// This function generates the ID of each Pokemon and adds 0´s infront for the detail cards
function generateIDDetail (i) {
    let pokemonID = allPokemon[i-1]['id'];
    let pokemonIDasString = pokemonID.toString();
    pokemonID = pokemonIDasString.padStart(3,"0");
    document.getElementById(`pokemonIDDetail${i}`).innerHTML += pokemonID;
}

// This function opens the detail card
function openDetailCard(i) {
    document.getElementById('DetailCard').style.display ="block";
    document.getElementById('DetailCardWrapper').style.display ="flex";
    renderDetailCard(i);
    renderPokemonAbilities (i);
}

// This function closes the detail card
function closeDetailCard(){
    document.getElementById("DetailCard").style.display ="none";
    document.getElementById('DetailCardWrapper').style.display ="none";
}

// This function stops the event wich opens the detail card due to an click outside and closes the detail card
function closeDetailCardOnbclickOutside(event) {
    event.stopPropagation();
}

// This function renders the detail card
function renderDetailCard(i) {
    renderDetailCardinside (i);
    changeBGcolorDetail (i);
    renderPokemonTypesDetailCard (i);
    generateIDDetail (i);
}

// This function shows the next detail card
function previous (i) {
    if (i>1){
    i--;
} else {
    i = allPokemon.length+1;
    i--;
}
    renderDetailCard(i);
    renderPokemonAbilities (i);
}

// This function shows the previous detail card
function next (i) {
    if (i<allPokemon.length){
    i++;
    } else {
        i=1;
    }
    renderDetailCard(i);
    renderPokemonAbilities (i);
}

// This function toggles the style of background of the Stat tab
function toggleToStats () {
    document.getElementById("CardAbout").style.display ="none";
    document.getElementById("CardStats").style.display ="block";
    document.getElementById("stats").style.backgroundColor = "rgb(98, 85, 85,0.6)"
    document.getElementById("about").style.backgroundColor = "rgb(98, 85, 85,0.2)"
}

// This function toggles the style of background of the About tab
function toggleToAbout () {
    document.getElementById("CardAbout").style.display ="block";
    document.getElementById("CardStats").style.display ="none";
    document.getElementById("about").style.backgroundColor = "rgb(98, 85, 85,0.6)"
    document.getElementById("stats").style.backgroundColor = "rgb(98, 85, 85,0.2)"
}

// This function changes the colour of the background from the pokemoncards
function changeBGcolor (i) {
    let BGcolor = allPokemon[i]['types']['0']['type']['name'];
    document.getElementById(`pokedex-${i}`).classList.add(BGcolor);
}

// This function changes the colour of the background from the pokemon detail cards
function changeBGcolorDetail (i) {
    let BGcolor = allPokemon[i-1]['types']['0']['type']['name'];
    document.getElementById(`contentDetailCardTop`).classList.add(BGcolor);
}

// This function changes the colour of the background from the searched pokemoncards
function changeBGcolorSearch (i) {
    let BGcolor = resultsOfSearch[i]['types']['0']['type']['name'];
    document.getElementById(`pokedex-${i}`).classList.add(BGcolor);
}

// This function renders different types of pokemon for the pokemon cards
function renderPokemonTypes (i) {
    let pokemonTypes = document.getElementById(`pokemonTypes${i}`);
    let pokemon = allPokemon[i];

        for (let i = 0; i < pokemon['types'].length; i++) {
            const element = pokemon['types'][i];
            let type = pokemon['types'][i]['type']['name'];
            pokemonTypes.innerHTML += `<p>${type}</p>`;
        }
}

// This function renders different types of pokemon detail for the pokemon cards
function renderPokemonTypesDetailCard (i) {
    let pokemonTypes = document.getElementById(`pokemonTypesDetailCard-${i}`);
    let pokemon = allPokemon[i-1];

        for (let i = 0; i < pokemon['types'].length; i++) {
            const element = pokemon['types'][i];
            let type = pokemon['types'][i]['type']['name'];
            pokemonTypes.innerHTML += `<p>${type}</p>`;
            }
}

// This function renders different abilities of pokemon for the pokemon detail cards
function renderPokemonAbilities (i) {
    let PokemonAbilities = document.getElementById(`abilities${i}`);
    let pokemon = allPokemon[i-1];

        for (let i = 0; i < pokemon['abilities'].length; i++) {
            const element = pokemon['abilities'][i];
            let ability = pokemon['abilities'][i]['ability']['name'];
            PokemonAbilities.innerHTML += `<div class="uppercase ml4">${ability}</div>`;
            
        }
}

// This function searches for given user input for different pokemon names 
function searchPokemon () {
    let searchedInput = document.getElementById('searchforPokemon').value;
    searchedInput = searchedInput.toLowerCase();
    let pokemonCard = document.getElementById('pokemonCard');
    pokemonCard.innerHTML = '';
    resultsOfSearch = [];

    for (let i = 0; i < allPokemon.length; i++) {
        let searchedPokemon = allPokemon[i]['name'];
            if (searchedPokemon.toLowerCase().includes(searchedInput)) {
            let searchResult = allPokemon[i];
            resultsOfSearch.push(searchResult);
        } 
        
    }
    renderfilteredPokemon(resultsOfSearch);
}

// This function clears the search input and renders all cards from local array
function clearSearch() {
    let searchedInput = document.getElementById('searchforPokemon');
    searchedInput.value = '';
    searchPokemon ();
}

function renderDetailCardinside (i){
    let pokemonName =  allPokemon[i-1]['name'];
    let pokemonID =  allPokemon[i-1]['id'];
    let pokemonImage = allPokemon[i-1]['sprites']['other']['official-artwork']['front_default'];     
    let pokemonHeight = allPokemon[i-1]['height'];
    let pokemonWeight = allPokemon[i-1]['weight'];
    let PokemonStatHP = allPokemon[i-1]['stats']['0']['base_stat'];
    let PokemonStatAttack = allPokemon[i-1]['stats']['1']['base_stat'];
    let PokemonStatDefense = allPokemon[i-1]['stats']['2']['base_stat'];
    let PokemonStatSpecialAttack = allPokemon[i-1]['stats']['3']['base_stat'];
    let PokemonStatSpecialDefense = allPokemon[i-1]['stats']['4']['base_stat'];
    let PokemonStatSpeed = allPokemon[i-1]['stats']['5']['base_stat'];
    
    DetailCard.innerHTML ='';
    renderDetailCardinside2(i);
}

// This function shows loading circle for 2 seconds
var myVar = setInterval(myTimer, 2000);
function myTimer() {
    document.getElementsByClassName("profile-main-loader")[0].style.display = "none";
}