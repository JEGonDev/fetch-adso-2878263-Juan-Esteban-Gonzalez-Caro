const URL1 = "https://rickandmortyapi.com/api/character"
// Traer la barra de busqueda
const inputCharacter = document.getElementById("txtCharacter")
// Traer el contenedor donde se van a renderizar las cards
const containerCards = document.getElementById("cardsContainer")

// Metodo para traer una API mediante una URL
const getAPI = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
} 

// crear la funcion encargada de crear las cards
const createCards = (character) => {
    const card = document.createElement("div")
    card.classList.add("card-character")

    const imgCard = document.createElement("img")
    imgCard.src = character.image
    imgCard.alt = character.name

    const descriptionCharacter = document.createElement("div")
    descriptionCharacter.classList.add("description-card")

    const nameCharacter = document.createElement("h2")
    nameCharacter.textContent = character.name

    card.appendChild(imgCard)
    card.appendChild(descriptionCharacter)

    descriptionCharacter.appendChild(nameCharacter)

    containerCards.appendChild(card)
}

// metodo fetch para cargar las primeras cards
const generateAllCharacters = async () => {
    const data = await getAPI(URL1)
    data.results.map(character => createCards(character))
}

window.addEventListener("DOMContentLoaded", generateAllCharacters)

// filtrar personajes por el nombre