/*Crear un programa en donde el usuario ingrese el nombre y el precio de 5 productos, al
finalizar, se listarán en pantalla el nombre y el precio de los productos, indicando con un
“*” el que posee el precio menor.*/

let productos = []; //Lista de Productos
let precio = []; //Lista de Precios
let listaComparacion = [];  //Lista donde voy a buscar el menor de los precios

//Pido datos y cargo listas

for(let i = 0; i < 5; i++){ //Pido datos y cargo listas
    let a = prompt("Ingrese el nombre del producto: ");
    productos.push(a);
    let b = parseInt(prompt("Ingrese el precio del producto: ")); 
    precio.push(b);
    listaComparacion.push(b); //Cargo listaComparacion con los precios

}

//Busco el menor valor dentro de listaComparacion

let temp; 

for(let i = 0; i < listaComparacion.length; i++){  
    for(let j = 0; j < listaComparacion.length; j++){
        if(listaComparacion[j] < listaComparacion[j+1]){
            temp = listaComparacion[j];
            listaComparacion[j] = listaComparacion[j+1];
            listaComparacion[j+1] = temp;
        }
    }
}

let menorValor = listaComparacion[4]; //Asigno el menor valor (el último) a la nueva variable "menorValor"

//Imprimo lista haciendo validaciones. Cuando el precio sea igual al menor valor => "true"
//Por lo que imprime el asterizco junto al precio

for(let i = 0; i < 5; i++){
    if(precio[i] != menorValor){
        document.write(`<b>Producto</b>: ${productos[i]} <b>Precio</b>: ${precio[i]} <br><br>`);
    }
    else if(precio[i] == menorValor){
        document.write(`<b>Producto</b>: ${productos[i]} <b>Precio</b>: ${precio[i]} <b style = "color: red">*</b> <br><br>`);
    }
}



