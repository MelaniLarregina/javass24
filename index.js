//APLICO DOM CON JS
const card1 = document.querySelector ("div.card1#cards1");

function CreandoCardDom1(){
    return `<div id="cards1" class="card1">
    <img class="card-img-top1" src="./images/dolares.jpeg" alt="dolares">
    <div class="card-body1">
    <h2 class="card-title1">Prestamos inmediatos</h2>
    <p class="card-text1">Confianza y rapidez, <strong>solicitalo en 6 cuotas!!</strong></p>
    <button class="boton1">Agregar</button>
    </div> </div> `
};
card1.innerHTML = CreandoCardDom1();

const card2 = document.querySelector ("div.card2#cards2");

function CreandoCardDom2(){
    return `<div id="cards2" class="card2">
    <img class="card-img-top2" src= "./images/prestamo_personal.jpg_242310155.webp" alt="imagen de celulares haciendo una transferencia bancaria">
    <div class="card-body2">
    <h2 class="card-title2">Prestamos inmediatos</h2>
    <p class="card-text2">Cpnfianza y rapidez, <strong>solicitalo en 9 cuotas!!</strong></p>
    <button class="boton2">Agregar</button>
    </div> </div>`
};
card2.innerHTML = CreandoCardDom2();

const card3 = document.querySelector ("div.card3#cards3");

function CreandoCardDom3(){
    return `<div id="cards3" class="card3">
    <img class="card-img-top3" src="./images/dolares3.jpg" alt="imagen de celulares haciendo una transferencia bancaria">
    <div class="card-body3">
    <h2 class="card-title3">Prestamos inmediatos</h2>
    <p class="card-text3">Cpnfianza y rapidez, <strong>solicitalo en 12 cuotas!!</strong></p>
    <button class="boton3">Agregar</button>
    </div> </div>`
};
card3.innerHTML = CreandoCardDom3();

const card4 = document.querySelector ("div.card4#cards4");

function CreandoCardDom4(){
    return `<div id="cards4" class="card4">
    <img class="card-img-top4" src= "./images/pressssstamo.webp" alt="imagen de celulares haciendo una transferencia bancaria">
    <div class="card-body4">
    <h2 class="card-title4">Prestamos inmediatos</h2>
    <p class="card-text4">Cpnfianza y rapidez, <strong>solicitalo en 24 cuotas!!</strong></p>
    <button class="boton4">Agregar</button>
    </div> </div>`
};
card4.innerHTML = CreandoCardDom4();

const InputNombre = document.querySelector("#InputNombre");
const InputEdad = document.querySelector("#InputEdad");
const InputTelefono = document.querySelector("InputTelefono");
const InputContacto = document.querySelector ("#InputContacto");

const Btn = document.querySelector ("#Btn");

//STORAGE

function Datos(){
localStorage.setItem("nombre", InputNombre.value);
localStorage.setItem("edad", InputEdad.value);
localStorage.setItem("telefono", InputTelefono.value);
localStorage.setItem("contacto", InputContacto.value);
}
Datos();
function RecuDatos(){
    InputNombre.value = localStorage.getItem("nombre");
    InputEdad.value = localStorage.getItem("edad");
    InputTelefono.value = localStorage.getItem("telefono");
    InputContacto.value = localStorage.getItem("contacto");
}

//EVENTOS
Btn.addEventListener("click", Datos);


