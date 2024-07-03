const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonType = document.querySelector('.pokemon__type');
const pokemonWeight = document.querySelector('.pokemon__weight');
const pokemonHeight = document.querySelector('.pokemon__height');
const pokemonAudio = document.querySelector('.pokemon__audio');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

    const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
    pokemonType.innerHTML = `Type: ${types}`;

    pokemonWeight.innerHTML = `Weight: ${data.weight / 10} kg`;
    pokemonHeight.innerHTML = `Height: ${data.height / 10} m`;

    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;

    // Play the Pokémon's cry
    pokemonAudio.src = `https://play.pokemonshowdown.com/audio/cries/${data.name}.mp3`;
    pokemonAudio.play();
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';
    pokemonType.innerHTML = '';
    pokemonWeight.innerHTML = '';
    pokemonHeight.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);

