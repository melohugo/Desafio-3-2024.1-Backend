const MAX = 1292;
const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292';
let pokemons = [];
let now = Math.floor(Math.random() * MAX);

function changeImage(id, url) {
    document.getElementById(id).src = url;
}
function changeText(id, text) {
    document.getElementById(id).innerText = text;
}

async function getPokemons() {
    let temp = await fetch(API).then((list) => list.json());
    pokemons = temp.results;
}

getPokemons();

async function previousPokemon() {
    now = Math.floor((now - 1) < 0 ? MAX : now - 1);

    const info = await fetch(pokemons[now].url)
    .then((req) => req.json());

    changeImage('img_sprite_front_default' , info.sprites.front_default);
    changeText('name' , info.name);
    changeText('height' , 'Altura: ' + info.height + 'm');
    changeText('weight' , 'Peso: ' + info.weight + 'kg');
    console.log("Pokemon Anterior");
}

async function nextPokemon() {
    now = Math.floor((now + 1) % MAX);

    const info = await fetch(pokemons[now].url)
    .then((req) => req.json());

    changeImage('img_sprite_front_default' , info.sprites.front_default);
    changeText('name' , info.name);
    changeText('height' , 'Altura: ' + info.height + 'm');
    changeText('weight' , 'Peso: ' + info.weight + 'kg');
    console.log("Pokemon Seguinte");
}
