// PRODUCTOS
const productos = [
    // Vinilos
    {
        id: "vinilos-01",
        titulo: "Vulgar display of power-Pantera",
        imagen: "https://scontent.fbog3-1.fna.fbcdn.net/v/t39.30808-6/484142193_1195135582259264_8934364697757633526_n.jpg?stp=dst-jpg_p552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFrrYJCY-AnrmICL_KiANNZP4iH57XU3WU_iIfntdTdZTGfMUX6VVrN0PNuHDw2pTQvq2xbRk2CNO9uVpLelJgE&_nc_ohc=d9SQIEgI1GIQ7kNvwEfaOzp&_nc_oc=AdmytgDN8NfcF88_tT2r-JJGaDI0R1UMeFRlu9r5EDgsPSvs4jxqisXL8ILHbJ1FqRQ&_nc_zt=23&_nc_ht=scontent.fbog3-1.fna&_nc_gid=_M8BA7Zzo44dbjosWO0k7Q&oh=00_AfK4fNLaBjpeoUDX0QrjrFh4sF6RuQ9ftVItWQtMrbrolw&oe=68415C5A",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 180000
    },
    {
        id: "vinilos-02",
        titulo: "Become the hunter-Suicide Silence",
        imagen: "https://napalmrecords.com/media/catalog/product/cache/2c98b5dedb058b51317c19b0b945bfc5/5/9/59492-suicide-silence-become-the-hunter-splatter-vinyl-napalm-records.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 84000
    },
    {
        id: "vinilos-03",
        titulo: "Master of reality-Black Sabbath",
        imagen: "https://www.vinylmeplease.com/cdn/shop/files/ROTM_master_of_reality_1600x.jpg?v=1701459066",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 100000
    },
    {
        id: "vinilos-04",
        titulo: "Issues-Korn/Edicion de dos discos",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_701242-MLA44173257895_112020-O.webp",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos"
        },
        precio: 160000
    },
    
    // Discos
    {
        id: "discos-01",
        titulo: "Lost and found-Mudvayne",
        imagen: "https://i.ebayimg.com/thumbs/images/g/p2IAAeSwNxVnxJiC/s-l1200.jpg",
        categoria: {
            nombre: "Discos",
            id: "discos"
        },
        precio: 24000
    },
    {
        id: "discos-02",
        titulo: "Dear desolation-Thy art is murder",
        imagen: "https://www.metalkingdom.net/album-photo/2021/04/28307-thy-art-is-murder-dear-desolation.jpg",
        categoria: {
            nombre: "Discos",
            id: "discos"
        },
        precio: 60000
    },
    {
        id: "discos-03",
        titulo: "Conjuring the dead-Belphegor",
        imagen: "https://www.metalkingdom.net/album-photo/2021/06/29306-belphegor-conjuring-the-dead-2.jpg",
        categoria: {
            nombre: "Discos",
            id: "discos"
        },
        precio: 60000
    },
    {
        id: "discos-04",
        titulo: "Barbarie y sangre en memoria de cristo-Masacre",
        imagen: "https://images.squarespace-cdn.com/content/v1/592f9fbc1b631b459d00a140/1521657521215-9CVGIQEZQ9ICW7GYMK9Y/HWS10-Masacre-Barbarie-Store.png",
        categoria: {
            nombre: "Discos",
            id: "discos"
        },
        precio: 24000
    },
    // Toca discos
    {
        id: "tocadiscos-01",
        titulo: "Toca discos azul/maletin",
        imagen: "https://images.ecestaticos.com/HqmgISdSL--QOJRkvk0PNG6HBYA=/0x0:1600x900/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd7e%2Ff75%2Ff14%2Fd7ef75f14bcedb93abf2d2095933d82d.jpg",
        categoria: {
            nombre: "Tocadiscos",
            id: "tocadiscos"
        },
        precio: 159000
    },
    {
        id: "tocadiscos-02",
        titulo: "Toca discos negro con bocina",
        imagen: "https://www.miche.com.co/cdn/shop/files/TOCADISCOSYALTAVOZAUDIOTECHNICAAT-LP60XSPBT-BKENCOLORNEGRO1.jpg?v=1710349339",
        categoria: {
            nombre: "Tocadiscos",
            id: "tocadiscos"
        },
        precio: 140000
    },
    {
        id: "tocadiscos-03",
        titulo: "Toca discos retro",
        imagen: "https://m.media-amazon.com/images/I/513+q-jJscL._AC_UF894,1000_QL80_.jpg",
        categoria: {
            nombre: "Tocadiscos",
            id: "tocadiscos"
        },
        precio: 100000
    },
    {
        id: "tocadiscos-04",
        titulo: "Toca discos rojo/maletin",
        imagen: "https://exitocol.vtexassets.com/arquivos/ids/893783/Tocadiscos-Bluetooth-de-3-velocidades-con-altavoces.jpg?v=637088592308730000",
        categoria: {
            nombre: "Tocadiscos",
            id: "tocadiscos"
        },
        precio: 168000
    }
    
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
