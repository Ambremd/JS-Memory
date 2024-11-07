// visuel de la page
let lastElement = null
let nbCoups = 0

const title = document.createElement('h1');
title.innerText ='Memory';

document.body.appendChild(title);

//boutton de lancement
const button = document.createElement("button");
/*button.setAttribute('id','my-button');
button.setAttribute('type','button');
button.classList.add("btn", "btn-primary");*/
button.innerText='Start';
button.style.backgroundColor='blue'
button.style.color='white';

button.addEventListener('click', (event) =>{ 
    console.log('start',button)
    button.remove();


    const div = document.createElement("div");
    div.classList.add('game-container')
    document.body.appendChild(div)

    const colors = ["red", "blue", "green", "pink", "green", "purple", "grey", "blue", "black", "pink","grey","red","yellow","purple","black","yellow"]
    colors.sort(() => Math.random() - 0.5);

    for (let i=0; i < 16; i++){
        const color = colors[i];

        const carte = document.createElement("div");
        carte.classList.add('card')
        carte.classList.add('card2')
        carte.classList.add(color)


        carte.addEventListener('click', (event) =>{ 
            carte.classList.remove("card2");

            console.log('lastelement', lastElement?.classList);
            if(lastElement !== null){
                if (!lastElement.classList.contains(color)){
                    setTimeout(() => {
                        carte.classList.add('card2')
                        lastElement.classList.add('card2')
                        lastElement = null
                    }, 500)
                }
                else {
                    nbCoups = nbCoups + 1
                    if(lastElement.classList.contains(color)){
                        const cardsHidden = document.querySelectorAll('.card2')
                        const nbCardsHidden = [...cardsHidden].length
                        if(nbCardsHidden === 0){
                            alert('fin de partie, en ' + nbCoups + ' coups')
                        }
                        lastElement = null

                    }

                }
            }
            else {
                lastElement = carte
            }
        });

        /*if(i === 0){
            carte.style.backgroundColor = 'red'
        }
        else if(i === 4) {
            carte.style.backgroundColor = 'green'
        }*/
        div.appendChild(carte)
    }
});
document.body.appendChild(button);