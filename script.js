const button = document.querySelector(`.btn`)
const textInput = document.querySelector(`.searchBar`)
const imgContainer = document.querySelector(`.imgContainer`)
const attributeBox = document.querySelector(`.attributeBox`)
const name = document.querySelector(`#name`)
const iD = document.querySelector(`#iD`)
const weight = document.querySelector(`#weight`)
const height = document.querySelector(`#height`)
const ability = document.querySelector(`#ability`)
const evoFrom = document.querySelector(`#evoFrom`)
const evoTo = document.querySelector(`#evoTo`)
const generation = document.querySelector(`#generation`)
const move = document.querySelector(`#moves`)
const types = document.querySelector(`#types`)
const flavorText = document.querySelector(`#flavorText`)

button.addEventListener(`click`, async () => {
    let searchText = textInput.value
    console.log(searchText)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText}/`)
    console.log(response)
    let responseEvo = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${searchText}/`)
    console.log(responseEvo)
    


    let pokemonName = response.data.name;
    console.log(pokemonName)
    let pokemonId = response.data.id || null;
    console.log(pokemonId)

    let pokemonImg = response.data.sprites.front_default || null;

    let pokemonHeight = (response.data.height * 0.3280839895).toFixed(2)
    let pokemonWeight = (response.data.weight / 4.5359237).toFixed(2)

    let abilities = response.data.abilities.map(ability => ability.ability.name)
    let pokemonAbility1 = abilities[0] || 'None';
    let pokemonAbility2 = abilities[1] || 'None';
    let pokemonEvoFrom = responseEvo.data.evolves_from_species?.name || 'None';
    let pokemonGeneration = responseEvo.data.generation.name || 'None';
    let pokemonMove1 = response.data.moves[0]?.move?.name || 'None';
    let pokemonMove2 = response.data.moves[1]?.move?.name || 'None';
    let pokemonMove3 = response.data.moves[2]?.move?.name || 'None';
    let pokemonMove4 = response.data.moves[3]?.move?.name || 'None';
    let pokemonTypes1 = response.data.types[0]?.type?.name || 'None';
    let pokemonTypes2 = response.data.types[1]?.type?.name || pokemonTypes1 || 'None';
    //let pokemonFlavorText = responseEvo.data.flavor_text_entries[0].flavor_text || 'None';
    let flavorEntry = responseEvo.data.flavor_text_entries.find(entry => entry.language.name === 'en');
    let pokemonFlavorText = flavorEntry ? flavorEntry.flavor_text : 'None';

    console.log(pokemonImg)
    imgContainer.setAttribute('src', pokemonImg || '')
    name.textContent = `Name: ${pokemonName}`
    iD.textContent = `ID: ${pokemonId || 'None'}`
    types.textContent = `Type: ${pokemonTypes1 || 'None'} / ${pokemonTypes2 || pokemonTypes1 || 'None'}`
    weight.textContent = `Weight: ${pokemonWeight || 'None'} lbs.`
    height.textContent = `Height: ${pokemonHeight || 'None'} ft.`
    ability.textContent = `Abilities: ${pokemonAbility1 || 'None'}, ${pokemonAbility2 || 'None'}`
    evoFrom.textContent = `Evolves from: ${pokemonEvoFrom || 'None'}`
    generation.textContent = `Generation: ${pokemonGeneration || 'None'}`
    move.textContent = `Moves: ${pokemonMove1 || 'None'}, ${pokemonMove2 || 'None'}, ${pokemonMove3 || 'None'}, ${pokemonMove4 || 'None'}`
    flavorText.textContent = `${pokemonFlavorText || 'None'}`
}
)



// const getPokemon = async () => {
//     const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
//     const pokemonColor = await axios.get(`https://pokeapi.co/api/v2/pokemon-color`)
//     console.log(pokemon)
//     console.log(pokemonColor)
//     // console.log(pokemonName)
// }

// getPokemon()
