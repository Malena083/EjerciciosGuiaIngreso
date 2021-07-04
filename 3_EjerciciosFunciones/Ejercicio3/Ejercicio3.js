/*Crear un programa que tenga una función que calcule el área tanto de rectángulos
como de triángulos, para ello, la función debe recibir 3 argumentos:
    ◦ “flagTriangulo” : si recibe “true” se indica que es un triangulo, si recibe “false” se
        indica que es un rectangulo.
    ◦ “base” : valor de la base del triangulo o rectángulo.
    ◦ “altura” : valor de la altura del triangulo o rectángulo.
*/

function CalculoArea(flagTriangulo, base, altura){
    if(flagTriangulo == true){
        let area = (base * altura) / 2;
        document.write(`Es un triángulo de ${area}cm² de área`);
    }
    else{
        let area = base * altura;
        document.write(`Es un rectángulo de ${area}cm² área`);
    }
}

CalculoArea(false, 18, 12);