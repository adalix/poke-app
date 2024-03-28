async function fetchPokemons(url = 'https://pokeapi.co/api/v2/pokemon/'){

    const response = await fetch(url)

    if(!response.ok) {
        throw new Error("Could not fetch the data")
    }
    const data =  await response.json();
    return data;
}