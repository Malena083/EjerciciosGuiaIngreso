/*Crear un programa en donde el usuario ingresa números y se guardan en un array. Al
ingresar “-1” se imprimirán los números ingresado junto con sus posiciones dentro del
array.*/

let a = []; 
let num = prompt("Ingrese un número. -1 para finalizar: "); //Pido string
let flag = 0;

if(num != -1){
    a.push(num); //Agrego primer num si no es -1
    flag = 1; 
}
else{document.write("Ha finalizado la carga")} //Si agrega -1 como 1er num finaliza el programa

while(num != -1){
    if(num != -1){
        let num = prompt("Ingrese un número. -1 para finalizar: "); //Mientras se cumpla la condición pido números
        if(num != -1){ 
            a.push(num); //Si es distinto de -1 lo agrego a la lista
        }
        else{break;} //De lo contrario, rompo el bucle y continúa el programa
    }
}

if(flag == 1){ 

    document.write("Lista de números con su posición: " + "<br><br>");

    for(numero in a){
        document.write(`número: ${a[numero]} posición: ${numero} <br>`); //Recorro lista e imprimo valor y posición
    }
}
