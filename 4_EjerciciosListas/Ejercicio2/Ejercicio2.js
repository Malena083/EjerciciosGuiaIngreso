/*Crear un programa en donde el usuario ingresa números hasta que ingresa “-1”, en
dicho caso el programa termina e imprime el promedio de los números ingresados.*/

let a = []; 
let num = parseInt(prompt("Ingrese un número. -1 para finalizar: ")); //Pido string y convierto a int
let suma = 0;
let cont = 0;

if(num != -1){
    a.push(num); //Agrego num si no es -1
}
else{document.write("Ha finalizado la carga")}

while(num != -1){
    if(num != -1){
        let num = parseInt(prompt("Ingrese un número. -1 para finalizar: ")); //Mientras se cumpla la condición pido números
        if(num != -1){ 
            a.push(num); //Si es distinto de -1 lo agrego a la lista
            suma = suma + num; //Suma de los números que voy ingresando
            cont = cont + 1; //Cantidad de números
        }
        else{break;} //De lo contrario, rompo el bucle y continúa el programa
    }
}

suma = suma + num; //Le sumo el número inicial porque el bucle no lo considera
cont = cont + 1; //Le sumo 1 porque el bucle no considera el número que ingrese al principio
document.write("Promedio de los números ingresados en la lista: " + suma/cont);