// lista de productos

// productos tecnológicos
const productosTecnologicos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
        categoria: "Categoría 1",
        imagen: "assets/img/product1.jpg",
        stock: 10,
        descripcion: "Descripción del producto 1",
        enlace: "producto1.html"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
        categoria: "Categoría 2",
        imagen: "assets/img/product2.jpg",
        stock: 5,
        descripcion: "Descripción del producto 2",
        enlace: "producto2.html"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
        categoria: "Categoría 3",
        imagen: "assets/img/product3.jpg",
        stock: 0,
        descripcion: "Descripción del producto 3",
        enlace: "producto3.html"
    }
];

// productos gamer
const productosGamer = [
    {
        id: 4,
        nombre: "Producto Gamer 1",
        precio: 150,
        categoria: "Gamer",
        imagen: "assets/img/gamer1.jpg",
        stock: 8,
        descripcion: "Descripción del producto gamer 1",
        enlace: "gamer1.html"
    },
    {
        id: 5,
        nombre: "Producto Gamer 2",
        precio: 250,
        categoria: "Gamer",
        imagen: "assets/img/gamer2.jpg",
        stock: 3,
        descripcion: "Descripción del producto gamer 2",
        enlace: "gamer2.html"
    },
    {
        id: 6,
        nombre: "Producto Gamer 3",
        precio: 350,
        categoria: "Gamer",
        imagen: "assets/img/gamer3.jpg",
        stock: 1,
        descripcion: "Descripción del producto gamer 3",
        enlace: "gamer3.html"
    }
];

// función para renderizar los productos en el DOM
function renderizarProductos() {
    const contenedor = document.querySelector(".product-list");
    productos.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("product-item");
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <a href="${producto.enlace}" class="btn btn-primary">Ver Detalles</a>
        `;
        contenedor.appendChild(item);
    });
}
