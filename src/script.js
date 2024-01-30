console.log('mlkmlmlml');

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');


function requestApi(searchTerm) {//essa é a primise
    const url = `http://localhost:3000/artists?name=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results))
    //inserir timeout
}

function displayResults(results) {// aqui é o async
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    results.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    console.log(resultArtist);
    resultArtist.classList.remove('hidden');
    //resultArtist.classList.add('artist');
};

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');//oculta a div result-playlist
        resultArtist.classList.remove('hidden');//remove a classe hidden da div result-artist
        //ou seja irá mostrar os estilos dessa div
        console.log(searchTerm);
        return 
    }
    
    requestApi(searchTerm);
})

function minhaPromise() {
    return new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona
    setTimeout(() => {
        const resultado = Math.random();
            if (resultado > 0.5) {
                resolve(resultado);
        }   else {
                reject('Erro: o número é menor ou igual a 0.5');
            }
        }, 2000);
    });
}

async function minhaFuncao() {
    try {
        const resultado = await minhaPromise();
        console.log('resultado:'+resultado);
    } catch (erro) {
        console.log(erro);
    }
}


minhaFuncao();