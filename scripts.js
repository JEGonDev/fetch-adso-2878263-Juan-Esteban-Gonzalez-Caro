const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
const containerCards = document.querySelector(".container-cards")
const btnGeneretaCard = document.querySelector("#generate-card")
const btnGenerateMultiple = document.querySelector("#generate-multiple")

const generateCards = () => {
    let counter = parseInt(prompt("¿Cuantas cards deseas crear?"))
    for (let i = 1; i < counter; i++) {
        getCharacter()
    }
}

const getCharacter = async () => {
    const response = await fetch(url)
    const data = await response.json()  
    makeCharacter(data[0])
}

const makeCharacter = (myCharacter) => {
    const card = document.createElement("div")
    card.classList.add("card")

    const imgCard = document.createElement("img")
    imgCard.src = myCharacter.image
    imgCard.alt = myCharacter.character

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    const nameCard = document.createElement("h3")
    nameCard.textContent = myCharacter.character

    const quoteCard = document.createElement("p")
    quoteCard.textContent = myCharacter.quote

    card.appendChild(imgCard)
    card.appendChild(cardContent)

    cardContent.appendChild(nameCard)
    cardContent.appendChild(quoteCard)

    containerCards.appendChild(card)
}

btnGeneretaCard.addEventListener("click", getCharacter)
btnGenerateMultiple.addEventListener("click", generateCards)

