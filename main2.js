
/*TIENDA*/

/*vamos a comenzar con el molde de los productos*/

class Juego {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precioPrimaria = precio;
        this.cantidad = cantidad;
    }
}

const juego1 = new Juego(1, "Alan Wake Remastered", 1450, 1);
const juego2 = new Juego(2,"DOOM Eternal Deluxe Edition", 2500, 1);
const juego3 = new Juego("3","DRAGON BALL FIGHTERZ", "1900", "1");
const juego4 = new Juego("4","Far Cry 5: Gold Edition", "2400", "1");
const juego5 = new Juego("5","HITMAN 3 - Deluxe Edition", "2550", "1");
const juego6 = new Juego("6","Life is Strange Remastered Collection", "2300", "1");
const juego7 = new Juego("7","Mortal Kombat 11 Ultimate", "2100", "1");
const juego8 = new Juego("8","NBA 2K22 Cross-Gen Digital Bundle", "2650", "1");
const juego9 = new Juego("9","Sekiro™: Shadows Die Twice - Game of the Year Edition", "2050", "1");

/* ARRAY DE LOS JUEGOS por si nesesito hacerle push y agregarle mas productos*/

const juegos = [juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9];

const contenedorJuegos = document.getElementById("contenedorJuegos");

juegos.forEach(juego =>{
    const divJuego = document.createElement("div");
    divJuego.classList.add("card", "col-xl-3", "col-md-6", "col-sm-12");
    divJuego.innerHTML = `
                        <div>
                            <img src="img/${juego.id}.jpg" class="card-img-top img-fluid py-3">
                            <div class="card-body">
                            <h3 class="card-title"> ${juego.nombre} </h3>
                            <p class="card-text"> ${juego.precio} </p>
                            <button id="boton ${juego.id}" class="btn btn-primary"> agregar al carrito </button>
                        </div>
                    </div>`
    contenedorJuegos.appendChild(divJuego);
    const boton = document.getElementById(`boton${juego.id}`);
    boton.addEventListener("click", () =>{
        agregarAlCarrito(juego.id);
    })
}); 

//carrito

const carrito = [];

const agregarAlCarrito = (id) => {
    const juego = juego.find(juego => juego.id === id);
    const productoEnCarrito = carrito.find(juego => juego.id === id);
    if(juegoEnCarrito) {
        juegoEnCarrito.canjuego
    }else {
        carrito.push(juego);
    }
    actualizarCarrito();
}

//muestro el carrito de compras modificando el DOM.

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", actualizarCarrito);

function actualizarCarrito () {
    let aux="";
    carrito.forEach(juego => {
        aux += `
        <div class="card col-xl-3 col-md-6 col-sm12">
            <img src="img/${juego.id}.jpg" class="card-img-top img-fluid py-3">
            <div class="card-body">
            <h3 class="card-title"> ${juego.nombre} </h3>
            <p class="card-text"> ${juego.precio} </p>
            <button onClick = "eliminarDelCarrito( ${juego.id} )" class="btn btn-primary"> Eliminar del carrito </button>
            </div>
                </div>
                `
    })
    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto),1);
    actualizarCarrito();
}








