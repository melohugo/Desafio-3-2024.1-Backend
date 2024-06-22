const MAX = 1292;
let now = Math.floor(Math.random() * MAX);

//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
    document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
    document.getElementById(id).innerText = text;
}

// Daqui para baixo voce ira escrever
// o código para resolver o desafio

async function previousPokemon() {
    now = Math.floor((now - 1) < 0 ? MAX : now - 1);
    const name = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + now + '&limit=1')
    .then((req) => req.json());

    const info = await fetch(name.results[0].url)
    .then((req) => req.json());

    changeImage('img_sprite_front_default' , info.sprites.front_default);
    changeText('name' , info.name);
    console.log("Pokemon Anterior");
}

async function nextPokemon() {
    now = Math.floor((now + 1) % MAX);
    const name = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + now + '&limit=1')
    .then((req) => req.json());

    const info = await fetch(name.results[0].url)
    .then((req) => req.json());

    changeImage('img_sprite_front_default' , info.sprites.front_default);
    changeText('name' , info.name);
    console.log("Pokemon Seguinte");
}
