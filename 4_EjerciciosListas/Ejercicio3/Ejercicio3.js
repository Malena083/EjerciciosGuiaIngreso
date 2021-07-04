/*Crear un programa en donde el usuario ingresa 5 números. Al finalizar, el programa
imprime los números ordenados de mayor a menor.*/

let a = []; 
let num = parseInt(prompt("Ingrese un número. -1 para finalizar: ")); //Pido string y convierto a int

if(num != -1){
    a.push(num); //Agrego num si no es -1
}
else{document.write("Ha finalizado la carga")}

//Si no es -1, sigue el programa 

while(num != -1){ 
    if(num != -1){
        let num = parseInt(prompt("Ingrese un número. -1 para finalizar: ")); //Mientras se cumpla la condición pido números
        if(num != -1){ 
            a.push(num); //Si es distinto de -1 lo agrego a la lista
        }
        else{break;} //De lo contrario, rompo el bucle y continúa el programa
    }
}

let temp;

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < a.length; j++){
        if(a[j] < a[j+1]){
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}

document.write("Lista ordenada de mayor a menor: " + a);


