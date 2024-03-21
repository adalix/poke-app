const card = document.querySelector(".card");

let pokemons = [];

function createPokemonCard(pokemon) {
    console.log(pokemon['name']);
}

function renderData() {
    console.log('current pokemon data length: ', pokemons.length)
    for (let pokemon of pokemons) {
        createPokemonCard(pokemon);
    }
}


fetchPokemons()
  .then((data) => {
    console.log('data fetch from server: ', data)
    pokemons = data.results;
    renderData();
  })
  .catch((err) => {
    console.log(err);
  });

