const POKEMON_LIST_LIMIT = 20;
const loader = document.querySelector('.loader')


async function fetchPokeApi(url){
    showLoader()
    const response = await fetch(url)
    if(!response.ok) {
        throw new Error("Could not fetch the data")
    }
    const data =  await response.json();

    hideLoader()
    return data;
}

async function listPokeMons(offset=0, limit=POKEMON_LIST_LIMIT){
    let url = undefined;
    if (offset > 0) {
        url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    } else {
        url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    }
    return await fetchPokeApi(url)
}

function showLoader(){

        loader.style.display = 'block';
}

function hideLoader(){
    loader.style.display = 'none';

}

