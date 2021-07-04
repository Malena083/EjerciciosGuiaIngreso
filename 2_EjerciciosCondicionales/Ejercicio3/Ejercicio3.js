/*Las puntuaciones de las películas se clasifican en:
    ◦ 0 : mala
    ◦ 1 : regular
    ◦ 2 : buena
    ◦ 3 : muy buena
    ◦ 4 : excelente
Definir una variable llamada “puntuacion” y cargarla con un valor de 0 a 4. Imprimir la
clasificación de la película según el valor numérico.*/

let puntuacion = 4;

switch(puntuacion){
    case 0:
        {
            document.write(`Como la puntuación es ${puntuacion} la película es mala`);
            break;
        }
    case 1:
        {
            document.write(`Como la puntuación es ${puntuacion} la película es regular`);
            break;
        }      
    case 2:
        {
            document.write(`Como la puntuación es ${puntuacion} la película es buena`);
            break;
        } 
    case 3:
        {
            document.write(`Como la puntuación es ${puntuacion} la película es muy buena`);
            break;
        }
    case 4:
        {
            document.write(`Como la puntuación es ${puntuacion} la película es excelente`);
            break;
        }
}