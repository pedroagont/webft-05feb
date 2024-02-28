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

  const createPokemonSearchResultMarkup = (res) => {
    const pokemonMarkup = `
    <article class="search-result">
      <img src="${res.sprites.other.home.front_default}" alt="">
      <h4>${res.name}</h4>
      <p>${res.types[0].type.name}</p>
    </article>
    `;
    return pokemonMarkup;
  };

  const renderPokemonSearchResult = (res) => {
    const pokemonMarkup = createPokemonSearchResultMarkup(res);
    $('#pokemon-list').html(pokemonMarkup);
  };

  const getPokemonByName = (pokemonName) => {
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      method: 'GET',
    })
      .then((res) => {
        console.log(res);
        renderPokemonSearchResult(res);
      })
      .catch((err) => {
        console.log(err);
        $('#pokemon-list').html('Pokemon not found!');
      });
  };

  const handlePokemonSearch = (e) => {
    e.preventDefault();

    // console.log(e.target.elements.name.value);
    const pokemonName = e.target.elements.name.value;
    $(e.target.elements.name).val('');

    getPokemonByName(pokemonName);
  };

  $('#pokemon-search-form').submit(handlePokemonSearch);
});
