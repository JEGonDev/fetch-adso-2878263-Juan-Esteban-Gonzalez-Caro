const api_key = 'O37PRGT6Km25LvvcA127s2tFGEwvdcFm'
let limit = 20
const urlGifs = `api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`
const containerCards = document.getElementById('cardsContainer')

const getAPI = async (URL) => {
    const response = await fetch(URL)
    const data = response.json()
    data.data.images.original
}

const createGifs = (gif) => {
    const card = document.createElement('div')
    card.classList.add('card-gif')

    const imgGif = document.createElement('img')
    imgGif.src = gif.images.original.url
    imgGif.alt = gif.title

    card.appendChild(imgGif)

    containerCards.appendChild(card)
}