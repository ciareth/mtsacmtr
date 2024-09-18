//Realizar un ejercicio que permita convertir metros a centimetros y viceversa
let unidad = prompt('Escriba "m" para convertir metros a centimetros O "cm" para convertir centimetros a metros');
if (unidad === "m"){
    let cantidad = parseFloat(prompt("Ingresa la cantidad de metros: "));
    conversion = cantidad*100;

    document.write("Los ", cantidad,"m equivalen a: ", conversion,"cm");
}
else if (unidad === "cm"){
    let cantidad = parseFloat(prompt("Ingresa la cantidad de centimetros: "));
    conversion = cantidad/100;

    document.write("Los ", cantidad,"cm equivalen a: ", conversion,"m");
}
else {
    document.write("Unidad no valida, intente de nuevo.");
}