const URL = "https://rickandmortyapi.com/api/character"
// Traer el contenedor donde se van a renderizar las cards
const inputCharacter = document.getElementById("containerCards")
// Traer la barra de busqueda
const containerCards = document.getElementById("txtCharacter")

// metodo fetch para cargar las primeras cards
const getAPI = async (URL) => {
    
} 

// crear la funcion encargada de crear las cards
const createCards = (character) => {
    const card = document.createElement("div")
    card.classList("card-character")

    const imgCard = document.createElement("img")
    imgCard.src = character.image
    imgCard.alt = character.name

    const descriptionCharacter = document.createElement("div")
    descriptionCharacter.classList("description-card")

    const nameCharacter = document.createElement("h2")
    nameCharacter.textContent = character.name

    card.appendChild(imgCard)
    card.appendChild(descriptionCharacter)

    descriptionCharacter.appendChild(nameCharacter)

    containerCards.appendChild(card)
}

// utilizar el metodo fetch

// utilizar la funcion de fetch para crear las cards

// filtrar personajes por el nombre