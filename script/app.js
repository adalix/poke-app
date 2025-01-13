const container = document.querySelector(".container");
const pagination = document.getElementById("el-pagination");

let pokemons = [];
let currentPage = 0;

function clearAll() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  while (pagination.firstChild) {
    pagination.removeChild(pagination.lastChild);
  }
}

function renderPokemons() {
  pokemons.forEach(async (p) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const details = await fetchPokeApi(p.url);
    const imgParent = document.createElement("div");
    imgParent.classList.add("img");
    const img = document.createElement("img");
    img.classList.add("pokemonImg");

    if (details.types[0].type.name) {
      const name = details.types[0].type.name;
      card.classList.add(name);
    }
    img.src = `${details.sprites.front_default}`;
    img.alt = `${p.name}`;

    card.innerHTML += `
    <div class="top-info">
        <p class="name">${p.name}</p>
        <p class="type">${details.types[0].type.name}</p>
    </div>
   
  `;
    card.appendChild(imgParent);
    imgParent.appendChild(img);
    container.appendChild(card);
  });
}

function render(apiData) {
  clearAll();
  pokemons = apiData.results;
  const total = apiData.count;
  renderPokemons();


  const prevPage = document.createElement("button");
  prevPage.classList.add("prev-btn");
  prevPage.innerText = "< Prev";
  prevPage.disabled = currentPage == 0;
  prevPage.addEventListener("click", (e) => {
    if (currentPage > 0) {
      currentPage -= 1;
      listPokeMons(currentPage * POKEMON_LIST_LIMIT, POKEMON_LIST_LIMIT)
        .then((data) => {
          render(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const nextPage = document.createElement("button");
  nextPage.classList.add("next-btn");
  nextPage.innerText = "Next >";
  nextPage.addEventListener("click", (e) => {
    currentPage += 1;
    listPokeMons(currentPage * POKEMON_LIST_LIMIT, POKEMON_LIST_LIMIT)
      .then((data) => {
        render(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  pagination.appendChild(prevPage);
  pagination.appendChild(nextPage);
}

listPokeMons()
  .then((data) => {
    render(data);
  })
  .catch((err) => {
    console.log(err);
  });
