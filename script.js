// script.js
let currentCard = 0;  // Suivi de la carte en cours
const flashcards = document.querySelectorAll('.flashcard'); // Sélectionner toutes les flashcards

// Initialisation : cacher toutes les cartes sauf la première
function initCards() {
    flashcards.forEach((card, index) => {
        if (index !== currentCard) {
            card.style.display = 'none';  // Masquer les autres cartes
        } else {
            card.style.display = 'block';  // Afficher la première carte
            card.style.opacity = 1;  // Assurez-vous que la carte est visible
        }
    });
}

// Fonction pour retourner la carte actuelle
function flipCard() {
    const card = flashcards[currentCard];
    const currentTransform = card.style.transform;

    // Si la carte est déjà retournée, la remettre à l'endroit
    if (currentTransform === 'rotateY(180deg)') {
        card.style.transform = 'rotateY(0deg)';
    } else {
        card.style.transform = 'rotateY(180deg)';
    }
}

// Fonction pour passer à la carte suivante
function nextCard() {
    if (currentCard < flashcards.length - 1) {
        flashcards[currentCard].style.display = 'none';  // Masquer la carte actuelle
        currentCard++;  // Passer à la carte suivante
        initCards();  // Afficher la nouvelle carte
    }
}

// Appeler l'initialisation des cartes
initCards();
