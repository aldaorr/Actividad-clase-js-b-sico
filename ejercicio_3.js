
/*
    Calcular el área de un triángulo.
*/


let base = prompt("Ingrese la medida de la base del triángulo: ")
console.log(base)

let altura = prompt("ingrese la medida de la altura del triángulo: ")
console.log(altura)

let area = ( parseFloat(base) * parseFloat(altura) ) / 2 

alert("El área del triángulo es: " + area)
