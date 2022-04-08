const h1 = document.querySelector("h1");
const hora = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const container = document.getElementById("container");
const imagem = document.getElementById("imagem")
const p = document.querySelector("p");
const h3 = document.querySelector("h3");
const h2 = document.querySelector("h2");

let imagens = [ 
    {
        backgroundColor: 'yellow',
        image: "url('images/dia.jpeg')"
    },
    {
        backgroundColor: 'blue',
        image: "url('images/tarde.jpg')"
    },
    {
        backgroundColor: 'black',
        image: "url('images/noite.jpg')"
    }
];

let date = new Date()
let hour = date.getHours();
// let hour = 19;
let minutes = date.getMinutes();

hora.textContent = hour;
minutos.innerHTML = minutes;

if (hour >= 00 && hour <= 12 ) {
    if (hour == 1) {
        h2.innerHTML = `Agora é ${hour}:${minutes} Hora`
    }
    h1.style.color = "black";
    container.style.backgroundColor = imagens[0].backgroundColor;
    imagem.style.backgroundImage = imagens[0].image ;
    p.style.color = "black";
    h3.innerHTML = "Bom dia";

}else{
    if(hour > 12 && hour < 18 ){
        container.style.backgroundColor = imagens[1].backgroundColor;
        imagem.style.backgroundImage = imagens[1].image;
        h3.innerHTML = "Boa Tarde";

    }else{
        container.style.backgroundColor = imagens[2].backgroundColor;
        imagem.style.backgroundImage = imagens[2].image;
        h3.innerHTML = "Boa Noite"; 
    }
} 






console.log(hour, minutes);