//HTML
const modal = document.querySelector('dialog');
const modalText = modal.querySelector('p');
const button = modal.querySelector('button');
let tokens = document.querySelectorAll('.token');
tokens = [...tokens];

//Variables
let equis = "❌";
let circle = "⭕";
let gameStatus = "p1";
let winnerPosition = undefined;
let clickCounter = 0;

//Event
tokens.forEach(element => {
    element.addEventListener('click', () => {
        if(element.textContent === ""){
            clickCounter++;
        }

        if(element.textContent !== "") return;
        if(gameStatus === "over") return;


        (gameStatus === "p1") ? element.innerText = equis : element.textContent = circle;
        (gameStatus === "p1") ? gameStatus = "p2" : gameStatus = "p1";
        
        checkWin();

        if(clickCounter === 9 && winnerPosition === undefined){
            modalActive("TIE");
        }
    });
});

function checkWin(){
    let tokensArray = Array.from(tokens).map(element => element.textContent);

    //Horizontals
    for(let i=0; i<=6; i+=3){
        if((tokensArray[i] === tokensArray[i+1]) && (tokensArray[i] === tokensArray[i+2]) && (tokensArray[i] !== "")){
            gameStatus = "over";
            winnerPosition = [i, i+1, i+2];
            win();
        }
    }

    //Verticals
    for(let i=0; i<3; i++){
        if((tokensArray[i] === tokensArray[i+3]) && (tokensArray[i] === tokensArray[i+6]) && (tokensArray[i] !== "")){
            gameStatus = "over";
            winnerPosition = [i, i+3, i+6];
            win();
        }
    }

    //Diagonals
    if((tokensArray[0] === tokensArray[4]) && (tokensArray[0] === tokensArray[8]) && (tokensArray[0] !== "")){
        gameStatus = "over";
        winnerPosition = [0, 4, 8];
        win();
    }
    if((tokensArray[2] === tokensArray[4]) && (tokensArray[2] === tokensArray[6]) && (tokensArray[2] !== "")){
        gameStatus = "over";
        winnerPosition = [2, 4, 6];
        win();
    }
}

function win(){
    winnerPosition.forEach(element => {
        tokens[element].classList.toggle("winner", true);
    })

    if(clickCounter%2===0){
        modalActive(`Player ${circle} is the winner`);
    } else {
        modalActive(`Player ${equis} is the winner`);
    }
    
}

function modalActive(text){
    modalText.textContent = text;
    modal.showModal()
    button.addEventListener('click', () => {
        location.reload();
    })
}