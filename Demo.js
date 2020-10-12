

console.log(pokemons);

async function getPokemons() {
  const response = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
  const body = await response.json();
  console.log(body);
  return body;
}

getPokemons();
