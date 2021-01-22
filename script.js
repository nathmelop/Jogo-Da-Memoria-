const cards = document.querySelectorAll('.card');

function flipCard() { //toggle tira e add a carta o add só faz uma vez 
    this.classList.add('flip') //this é o contexto da nossa funcao.. seria o que estamos clicando que seria o card 
}

// this vai add a class flip para o nosso elemento card 
//card para pecorrer toda a lista, para cada card do forEach 
cards.forEach((card) => {
        card.addEventListener('click', flipCard) // add um evento de click e acionar a funcao flip card 
    }) // ele add e tira