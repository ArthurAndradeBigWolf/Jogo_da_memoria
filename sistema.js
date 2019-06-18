
//SELECIONANDO A DIV DOCUMENTO HTML
const cardboard = document.querySelector("#cardboard");
const images = ['car.svg','cola.svg','donut.svg','beer(1).svg','ice-cream.svg','popcorn.svg'];


let cardHTML = '';

images.forEach( img => {cardHTML+=`<div class="memorycard" data-card="${img}"> <img class="frontface" src="img/${img}"> <img class="backface" src="img/js-badge.svg"> </div>`});

//ADICIONANDO A DIV QUE CONTÉM A IMAGENS NA CARBOAR
cardboard.innerHTML = cardHTML + cardHTML;

//PEGANDO OS CARDS

let primcarta, seccarta;
let bloqueador = false;

//SELECIONANCO TODOS QUE TIVEREM A CLASS MEMORYCARD NO ARQUIVO HTML

function flipCard(){

    if(bloqueador){
        return false;
    }
    this.classList.add('flip');


    if(primcarta == null){
        primcarta = this;
    }else{
        seccarta = this;
        bloqueador = true;
    }


    comp();
}

function comp(){
    let com = primcarta.dataset.card === seccarta.dataset.card;
    console.log(com);

    if(com == false){
        voltaCart();
    }else{
        primcarta = null;
        seccarta = null;
        
        bloqueador = false;
    }

}

function voltaCart(){

    //FUNÇÃO QUE ESPERA DOIS SECUNS PARA EXECUTAR A FUNÇÃO
    setTimeout(() => {
        primcarta.classList.remove('flip');
        seccarta.classList.remove('flip');

        [primcarta,seccarta,bloqueador]=[null,null,false];
       
    }, 1000);
    
    
}

const cards = document.querySelectorAll(".memorycard");
cards.forEach(card => card.addEventListener('click', flipCard));