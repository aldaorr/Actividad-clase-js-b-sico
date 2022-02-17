
/*
    Calcular descuento.
*/

let precio = prompt("Ingrese el precio del articulo: ")
console.log(precio)

let porcentaje = prompt ("Ingrese el descuento que se aplicara: ")
console.log(porcentaje)

let porcentaje_decimal = parseInt(porcentaje) / 100
console.log(porcentaje_decimal)

let descuento = parseFloat(porcentaje_decimal) * parseFloat(precio)
console.log(descuento)

let precio_final = parseFloat(precio) - descuento

alert("El precio  final del producto es: " + precio_final)


