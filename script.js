alert("Faça sua divisão aqui!");

let numerador = (parseFloat(prompt("Digite seu numerador:")));
let denominador = (parseFloat(prompt("Digite seu denominador:")));

let resultado;


if (denominador == 0) {
    alert("Não é possível dividir por zero.");
}
else {
    resultado = numerador / denominador;

    alert (numerador + " " + "dividido por " + denominador + " é " + resultado);
}