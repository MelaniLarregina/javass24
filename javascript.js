class Personas{
   constructor (nombre, dni , edad){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
   }
};

   getDatos();{
      console.log ("<---------------->");
      console.log ("nombre ",this.nombre);
      console.log ("dni ",this.dni);
      console.log ("edad " ,this.edad);
      console.log ("");
   };

   getNombre();{
      return this.nombre;
   };

   getEdad();{
      return this.edad;
   };

   getDni();{
      return this.dni;
   };

   darBienvenida();{
      return ("Bienvenido a tu prestamo online inmediato ");
   };

   MayorDeEdad (edad);{ edad >=18 ? alert ("Correcto, es mayor de edad") :  alert ("Error, no es mayor de edad");};


function InteresesCuotas( monto , cuotas){
   let interes = 0;
   if( cuotas == 6){
      interes = monto * 0.30; 
   }
   else if  ( cuotas == 9){
      interes = monto * 0.50;
   }
   else if ( cuotas == 12){
      interes = monto * 0.80;
   }
   else if (cuotas == 24){
      interes = monto * 1;
   }
   return interes;
};

function ivaPrestamo ( total ){
   return total * 0.21;
};

function traerPersonaPorDni(dniBuscado,validos){
   for (let j = 0; j < validos; j++) {
      if(arrayPersonas[j].getDni() === dniBuscado){
         return arrayPersonas[j];
      }
   }
   return null;
};

let seguir = 's';
let arrayPersonas = new Array();
let i = 0;

while(seguir === 's'){
   let nombre = prompt ("Ingresa tu nombre y apellido");
   let dni = prompt("Ingrese su documento");
   let edad= prompt("Ingrese su edad");
   let persona = new Personas(nombre,dni,edad);
   alert(persona.darBienvenida() + " " + persona.getNombre());

   if(persona.MayorDeEdad(edad)){
      let monto = prompt ("Ingresa cuanto dinero quieres solicitar:  ");
      monto = parseInt (monto);

      let cuotas = prompt ("En cuantas cuotas: 6, 9 , 12, 24");

      let total = monto + InteresesCuotas (monto , cuotas);
      let totalConIva = total + ivaPrestamo(total);

      alert("Pediste:  " + monto);
      alert("Cuotas: " + cuotas);
      alert("Total con intereses: " + total);
      alert("Total con intereses e iva: " + totalConIva);

      
      arrayPersonas[i] = persona;
      seguir = prompt("Desea seguir? (s/n)");
      i++;
   }
   persona.getDatos();
}

let dniBuscado = prompt("ingrese el dni de una persona a buscar dentro de la base de datos de prestamos: ");
let personaBuscada = traerPersonaPorDni(dniBuscado,i);

if(personaBuscada !=null){
   alert(personaBuscada.getNombre() + ", " + personaBuscada.getEdad() + ", " + personaBuscada.getDni());
}else{
   alert("esa persona no existe en la base de datos de prestamos!");
}

const card1 = document.querySelector ("div.card1#cards1");
const carrito = [];
const btnCarrito = document.querySelector("boton#adquirir");

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

/*const InputNombre = document.querySelector("#InputNombre");
const InputEdad = document.querySelector("#InputEdad");
const InputTelefono = document.querySelector("InputTelefono");
const InputContacto = document.querySelector ("#InputContacto");

const Btn = document.querySelector ("#Btn");

function cargarProductos() {
    contenedor.innerHTML = ""
    if (productos.length > 0) { 
        productos.forEach((card1, card2, card3, card4)=> contenedor.innerHTML += crearCardHTML(card1, card2, card3, card4))
        activarClickEnBotones()
    } else {
        contenedor.innerHTML = crearCardError()
    }
}

function activarClickEnBotones() {
    const AgregarAlBoton = document.querySelectorAll("button.add-to-cart")
    AgregarAlBoton.forEach((boton)=> {
        boton.addEventListener("click", (e)=> {
            const id = parseInt(e.target.id)
            const productoSeleccionado = productos.find((card1, card2, card3, card4)=> producto.id === id)
            carrito.push(productoSeleccionado)
            console.table(carrito)
        })
    })
}

cargarProductos()

btnCarrito.addEventListener("click", ()=> {
    alert("Hiciste click en el carrito.")
})

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

Btn.addEventListener("click", ()=> {
Datos()
Swal.fire({
   title: "Te enviaremos informacion!",
   text: "Tus datos fueron cargados con exito!",
   icon: "success"
 });
});*/
