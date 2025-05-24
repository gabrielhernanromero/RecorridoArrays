const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
  ];




  console.log("nombre del primer producto", productos[0].nombre)


  console.log("Parte 1: Acceso a elementos y recorrido de arrays")

  console.log("\n2. Productos con for...of:");
for (const producto of productos) {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}



console.log("prodcutops con forEach");
productos.forEach(p => {
  console.log(`Producto: ${p.nombre} -Precio: $${p.precio} `)
});



console.log("Parte 2: Métodos de transformación y filtrado");





console.log("nombre de productos con map")

const nombre = productos.map (p => p.nombre);
console.log("nombre de productos ", nombre);

console.log("Usando Filter para CATEGORIA ")
const categorias = productos.filter(categoria => categoria.categoria == "Ropa");
console.log("categorias igual a ropa : " , categorias);


console.log("usando filter para precio");
const caros = productos.filter(p => p.precio > 3000);
console.log("precio mas elevados que 3000" , caros);


console.log("usando find para Gorra")
const gorra = productos.find(p => p.nombre === "Gorra");
console.log("El elemento que se busca es gorra y se encontro : " , gorra);



console.log("Parte 3: Métodos de validación")

const hayMuyCaro = productos.some(p => p.precio > 10000)
console.log("algunos productos cuentas mas que 10.000?" , hayMuyCaro)


console.log("usando el every")
const masDeMil = productos.every(p => p.precio > 1000)
console.log("todos los productos salen mas de mil?" , masDeMil)


console.log("Usando includes")

const camp = nombre.includes("Campera")
console.log("hay productos con campera?", camp)



console.log("PARTE 4 ");

const deMenorAMayor = [...productos].sort((a,b) => a.precio - b.precio)
console.log("array ordenado de menor a mayor", deMenorAMayor)


console.log("usando map personalizado")
const mensaje = productos.map(p => `El producto ${p.nombre} cuensta $${p.precio} y pertenece a la categoria ${p.categoria}`);

console.log(mensaje)


console.log("usando spread")
const nuevosProductos = [
  { id: 6, nombre: "Bufanda", precio: 1000, categoria: "Accesorios" },
  { id: 7, nombre: "Medias", precio: 500, categoria: "Ropa" }
];

const todosLosProductos = [...productos, ...nuevosProductos];
console.log("\n13. Todos los productos combinados:", todosLosProductos);
 // agregando un comentariogit