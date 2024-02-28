$(document).ready(() => {
  console.log('Hi from app!');

  const createPokemonMarkup = (pokemon) => {
    return `<article>${pokemon.name}</article>`;
  };

  const renderPokemon = (pokemonData) => {
    const pokemonList = $('#pokemon-list');
    pokemonList.empty();

    for (const pokemon of pokemonData) {
      const pokemonMarkup = createPokemonMarkup(pokemon);
      pokemonList.append(pokemonMarkup);
    }
  };

  const getAllPokemon = () => {
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon',
      method: 'GET',
      //   success: (res) => {},
      //   error: (e) => {}
    })
      .then((res) => {
        renderPokemon(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAllPokemon();
});
