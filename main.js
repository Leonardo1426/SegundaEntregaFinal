/* formulario para novedades */

class Cliente {
    constructor(nombre, email, numeroDeTelefono) {
        this.nombre = nombre;
        this.email = email;
        this.numeroDeTelefono = numeroDeTelefono;
    }
}

const arrayClientes = [];

const formularioNovedades = document.getElementById("formularioNovedades");

formularioNovedades.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nombre = document.getElementById("formNombre");
    const email = document.getElementById("formEmail");
    const numeroDeTelefono = document.getElementById("formNumeroDeTelefono");
    const cliente = new Cliente(nombre.value, email.value, numeroDeTelefono.value);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
    formularioNovedades.reset();
})

/* TODAVIA EN PROGRESO PARA QUE EL FORMULARIO HAGA LO QUE YO QUIERO, PERO LA ESTRUCTURA ESTA DEBO INVESTIGAR MAS*/


