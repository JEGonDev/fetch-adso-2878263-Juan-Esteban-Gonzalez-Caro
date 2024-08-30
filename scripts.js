const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
const containerCards = document.querySelector(".cards-container")
const btnGenerateCard = document.querySelector("#generate-card")
const btnGenerateMultiple = document.querySelector("#generate-multiple")
const inputCharacter = document.querySelector("#input-character");

const generateCards = () => {
    let counter = parseInt(prompt("¿Cuantas cards deseas crear?"))
    for (let i = 0; i < counter; i++) {
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

const getCharacterByName = () => {
    
    const characterName = inputCharacter.value.toLowerCase().trim();
    // Selecciona todas las cards dentro del contenedor
    const cards = containerCards.querySelectorAll(".card");
    
    cards.forEach(card => {
        // Obtener el nombre del personaje de la card
        const nameCard = card.querySelector("h3").textContent.toLowerCase().trim();
        
        // Mostrar la card si el nombre incluye el texto de búsqueda
        if (nameCard.includes(characterName)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
};

btnGenerateCard.addEventListener("click", getCharacter)
btnGenerateMultiple.addEventListener("click", generateCards)
inputCharacter.addEventListener("input", getCharacterByName)
