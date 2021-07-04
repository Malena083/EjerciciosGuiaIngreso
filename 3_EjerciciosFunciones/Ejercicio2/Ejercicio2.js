/*Crear un programa que tenga una función que calcule el máximo entre 3 números
enteros pasados como argumento y devuelva el mayor.*/

function Mayor(a, b, c){
    if(a > b & a > c){
        return a;
    }
    else if(b > a & b > c){
        return b;
    }
    else if(c > a & c > b){
        return c;
    }
}

document.write(Mayor(55, 20, 33));