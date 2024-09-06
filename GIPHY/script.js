const api_key = 'O37PRGT6Km25LvvcA127s2tFGEwvdcFm'
let limit = 35
const urlGifs = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`
const containerGifs = document.getElementById('gifsContainer')

const getAPI = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    return data.data
}

const createGif = (gif) => {
    const card = document.createElement('div')
    card.classList.add('gif')

    const imgGif = document.createElement('img')
    imgGif.src = gif.images.original.url
    imgGif.alt = gif.title

    card.appendChild(imgGif)

    containerGifs.appendChild(card)
}

const getGif = async () => {
    const data = await getAPI(urlGifs)
    data.forEach(gif => createGif(gif));
}

window.addEventListener('DOMContentLoaded', getGif)