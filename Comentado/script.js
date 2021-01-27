/*

const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; //trancar tabuleiro 

function flipCard() { //toggle tira e add a carta o add só faz uma vez 
    if (lockBoard) return; // se for vdd ela retorna e nada acontece 
    if (this === firstCard) return; // n vai acontecer nada caso click duas vezes na carta 

    this.classList.add('flip'); //this é o contexto da nossa funcao.. seria o que estamos clicando que seria o card 
    if (!hasFlippedCard) { //add o primeiro click na carta
        hasFlippedCard = true;
        firstCard = this; //primeira carta vai ser igual ao elemento que foi clicado 
        return;
    }

    secondCard = this; //sempre que chamar vai precisar zerar o unflipcards
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards(); //desabilitar o card se não for igual 
        return;
    }

    unflipCards();
}

//vai tirar o elemento da carta e assim você n consegue mais clicar nela 
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
//ele vai levar um tempo daquele numero q vc colocou como segundo parametro para realizar aquela funcao
function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip'); //tirando a flip era retorna ao que era antes 
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}
//criar um array caso um dos indices do array q estamos tratando 
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//embaralhar as cartas 
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12); //math.flor serve para arredondar o resultado da expressão 
        card.style.order = randomPosition; //quando começar o jogo sempre vai mudar as cartas 
    })
})();


// this vai add a class flip para o nosso elemento card 
//card para pecorrer toda a lista, para cada card do forEach 
cards.forEach((card) => {
    card.addEventListener('click', flipCard) // add um evento de click e acionar a funcao flip card 
}); // ele add e tira

*/