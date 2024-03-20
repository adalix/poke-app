fetchData();
async function fetchData(){

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')

    if(!response.ok) {
        throw new Error("Could not fetch the data")
    }

    const data =  await response.json();
    return data;
}