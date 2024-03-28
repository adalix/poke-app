const container = document.querySelector(".container");

let pokemons = [];

function createPokemonCard(pokemon) {
  console.log(pokemon["name"]);
}
function renderData() {
  console.log("current pokemon data length: ", pokemons.length);
  pokemons.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add('card')
    card.innerHTML += `
    <div class="top-info">
        <p class="name">${p.name}</p>
        <p class="type">${p.type}</p>
    </div>
    <div class="img">
        <img src="https://placehold.co/200x200" alt="${p.name}">
    </div>
    <div class="bottom-info"></div>`;

    container.appendChild(card)
    });
}

fetchPokemons()
  .then((data) => {
    console.log("data fetch from server: ", data);
    pokemons = data.results;
    renderData();
  })
  .catch((err) => {
    console.log(err);
  });