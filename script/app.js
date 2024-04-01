const container = document.querySelector(".container");

let pokemons = [];

function renderData() {

  pokemons.forEach(async (p) => {
    const card = document.createElement("div");
    card.classList.add('card')
    const details =  await fetchPokemons(p.url);
    const imgParent = document.createElement('div');
    imgParent.classList.add('img')
    const img = document.createElement('img')
    img.classList.add('pokemonImg');



    if(details.types[0].type.name){
      const name = details.types[0].type.name;
      card.classList.add(name)
    }
    img.src = `${details.sprites.front_default}`;
    img.alt = `${p.name}`

    card.innerHTML += `
    <div class="top-info">
        <p class="name">${p.name}</p>
        <p class="type">${details.types[0].type.name}</p>
    </div>
   
  `;
    card.appendChild(imgParent)
    imgParent.appendChild(img)
    container.appendChild(card)
    });
}

fetchPokemons()
  .then((data) => {
    console.log("data fetch from server: ", data);
    pokemons = data.results;
    return renderData();
  })
  .catch((err) => {
    console.log(err);
  });