function renderPokemon2() {
    for (let i = loadPokemonstart-1; i < allPokemon.length; i++) {
        const element = allPokemon[i];
        let pokemonName =  allPokemon[i]['name'];
        let pokemonID =  allPokemon[i]['id'];
        let pokemonImage = allPokemon[i]['sprites']['other']['official-artwork']['front_default'];   
        
        pokemonCard.innerHTML += ` 
        <div onclick="openDetailCard(${pokemonID})" class="pokedex" id="pokedex-${i}">
            <div class="NameID">
                <h1 id="pokemonName">${pokemonName}</h1>
                <span id="pokemonID${i}">#</span>
            </div>
            <div class="SkillImg">
                <div class="align-center" id="pokemonTypes${i}">
            </div>
                <img src="${pokemonImage}">
            </div>
        </div>`;
        changeBGcolor (i);
        renderPokemonTypes (i);
        generateID (i);
}
}

function renderfilteredPokemon2() {
    pokemonCard.innerHTML = '';
    for (let i = 0; i < resultsOfSearch.length; i++) {
        const element = resultsOfSearch[i];
        let pokemonName =  resultsOfSearch[i]['name'];
        let pokemonID =  resultsOfSearch[i]['id'];
        let pokemonImage = resultsOfSearch[i]['sprites']['other']['official-artwork']['front_default'];   
        
        pokemonCard.innerHTML += ` 
        <div onclick="openDetailCard(${pokemonID})" class="pokedex" id="pokedex-${i}">
            <div class="NameID">
                <h1 id="pokemonName">${pokemonName}</h1>
                <span id="pokemonID${i}">#</span>
            </div>
            <div class="SkillImg">
                <div id="pokemonTypes${i}">
                </div>
                <img src="${pokemonImage}">
            </div>
        </div>`;
        changeBGcolorSearch (i);
        renderPokemonTypes (i);
        generateIDsearchedPokemons (i);
}
}

function renderDetailCardinside2(i, pokemonName, pokemonID, pokemonImage, pokemonHeight, pokemonWeight, PokemonStatHP, PokemonStatAttack, PokemonStatDefense, PokemonStatSpecialAttack, PokemonStatSpecialDefense, PokemonStatSpeed ) {
    DetailCard.innerHTML += ` 
    <div onclick="closeDetailCardOnbclickOutside(event)">
        <div id="contentDetailCardTop" class="contentDetailCardTop">
            <div class="space-between">
                <div><h1 class="ml16">${pokemonName}</h1></div>
                <img onclick="closeDetailCard()" class="icon" src="./img/schliessen.png">
            </div>
            <div><span id="pokemonIDDetail${i}" class="ml16">#</span></div>
            <div class="skill" id="pokemonTypesDetailCard-${i}">
                
            </div>
            <div class="space-between">
                <img onclick=previous(${pokemonID}) class="icon" src="./img/winkel-quadrat-links.svg">
                <img class="pokemonDetail" src="${pokemonImage}">
                <img onclick=next(${pokemonID}) class="icon" src="./img/winkel-quadrat-rechts.svg">
            </div>
        </div>
        <div class="contentDetailCardBottom">
            <div class="nav">
                <p class="about" id="about" onclick="toggleToAbout()">About</p>
                <p class="stats" id="stats" onclick="toggleToStats()">Stats</p>
            </div>
            <div class="cardAbout" id="CardAbout">
                <p class="ml16 pt16">Height: 0,${pokemonHeight}m</p>
                <p class="ml16">Weight: ${pokemonWeight/10}kg</p>
                    <div class="abilities ml16" id="abilities${i}">
                        <div>Abilities: 
                        </div>
                    </div>     
            </div>
            <div class="cardStats" id="CardStats">
            <table>
                <tbody> 
                    <tr>
                        <td class="td-primary">HP</td>
                        <td> <div class="progress"><div class="progress-bar" role="progressbar" style="width: ${PokemonStatHP}%;" aria-valuenow="${PokemonStatHP}%" aria-valuemin="0" aria-valuemax="100">${PokemonStatHP}%</div></div></td>
                    </tr>
                    <tr>
                        <td class="td-primary">Attack</td>
                        <td><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${PokemonStatAttack}%;" aria-valuenow="${PokemonStatAttack}%" aria-valuemin="0" aria-valuemax="100">${PokemonStatAttack}%</div></div></td>
                    </tr>
                    <tr>
                        <td class="td-primary">Defense</td>
                        <td><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${PokemonStatDefense}%;" aria-valuenow="${PokemonStatDefense}%" aria-valuemin="0" aria-valuemax="100">${PokemonStatDefense}%</div></div></td>
                    </tr>
                    <tr>
                        <td class="td-primary">Sp. Attack</td>
                        <td><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${PokemonStatSpecialAttack}%;" aria-valuenow="${PokemonStatSpecialAttack}%" aria-valuemin="0" aria-valuemax="100">${PokemonStatSpecialAttack}%</div></div></td>
                    </tr>
                    <tr>
                        <td class="td-primary">Sp. Defense</td>
                        <td><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${PokemonStatSpecialDefense}%;" aria-valuenow="${PokemonStatSpecialDefense}%" aria-valuemin="0" aria-valuemax="100">${PokemonStatSpecialDefense}%</div></div></td>
                    </tr>
                    <tr>
                        <td class="td-primary">Speed</td>
                        <td><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${PokemonStatSpeed}%;" aria-valuenow="${PokemonStatSpeed}%" aria-valuemin="0" aria-valuemax="100">${PokemonStatSpeed}%</div></div></td>
                    </tr>
                </tbody>
            </table>
    
            </div>
    
        </div>
    </div>
    `;
}