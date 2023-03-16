 //dado mocado: onde passam a descricao do objeto 
const episodes = [
    {
        img: "img/tlou_ep.1_s1.png",
        title: "When You're Lost In The Darkness",
        description:
            "In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by a soldier.",
    },

    {
        img: "img/tlou_ep2_s1_Infected.png",
        title: "Infected",
        description:
            "Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
    },

    {
        img: "img/tlou_s1.ep3.png",
        title: "Long, Long Time",
        description:
            "Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
    },

    {
        img: "img/tlou_s1_ep4.png",
        title: "Please Hold to My Hand",
        description:
            "Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
    },

];

const list = document.querySelector(".episodes__list");


function addCard(episodes) {
    for (let i = 0; i < episodes.length; i++) {
        
        renderCard(episodes[i]);
    }
}


addCard(episodes);

function renderCard(episodio) {
    const listItem = document.createElement("li");
    listItem.classList.add("card");

    listItem.innerHTML = `
    <img 
    src=${episodio.img} 
    alt=${episodio.title}
/>
<div class="card__texto">
    <h4>${episodio.title}</h4>
    <p>
    ${episodio.description}
    </p>
</div>
    
    `;

    list.appendChild(listItem);
}








//const nome = "Madi";
//let idade = 20;

//idade = idade + 1;

//console.log(nome); 

//nome = "Gustavo"; 


//const lastTransactionsValues = [30, 30.5, 20];
//const valorDoProduto = 38;
//let saldo = 50; // se mudar pra 10, aí o saldo será insuficiente


//if (saldo >= valorDoProduto) {
//  saldo = saldo - valorDoProduto;
//  lastTransactionsValues.push(valorDoProduto);
//  console.log(`compra realizada, seu saldo agora é 20`);
//} else {
//   console.log("saldo insuficiente")
//}

