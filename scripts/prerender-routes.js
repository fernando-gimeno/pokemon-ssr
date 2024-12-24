const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;

(async () => {
  const fs = require("fs");

  // Pokemons por id
  const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
  let fileContent = pokemonIds.map((id) => `/pokemon/${id}`).join("\n");

  // Páginas de pokemons
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    fileContent += `\n/pokemons/page/${i}`;
  }

  // Nombres de pokemons
  const pokemonNameList = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`
  ).then((res) => res.json());

  fileContent += "\n";
  fileContent += pokemonNameList.results
    .map((pokemon) => `/pokemons/${pokemon.name}`)
    .join("\n");

  fs.writeFileSync("routes.txt", fileContent);

  console.log("Prerender routes generated");
})();
