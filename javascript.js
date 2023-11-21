/*CLASES*/
class Personas{
   constructor (nombre, dni , edad){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
   }

   getDatos(){
      console.log ("<---------------->");
      console.log ("nombre ",this.nombre);
      console.log ("dni ",this.dni);
      console.log ("edad " ,this.edad);
      console.log ("");
   }

   getNombre(){
      return this.nombre;
   }

   getEdad(){
      return this.edad;
   }

   getDni(){
      return this.dni;
   }

   darBienvenida(){
      return ("Bienvenido a tu prestamo online inmediato ");
   }

   MayorDeEdad (edad){
      if( edad >=18 ){
         alert ("Correcto, es mayor de edad");
         return true;
      }
      else {
         alert ("Error, no es mayor de edad");
         return false;
      }
   }
}

/*FUNCIONES*/

function InteresesCuotas ( monto , cuotas){
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
}

function ivaPrestamo ( total ){
   return total * 0.21;
}

function traerPersonaPorDni(dniBuscado,validos){
   for (let j = 0; j < validos; j++) {
      if(arrayPersonas[j].getDni() === dniBuscado){
         return arrayPersonas[j];
      }
   }
   return null;
}

/*CODIGO SUELTO*/
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