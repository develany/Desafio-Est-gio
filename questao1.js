const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const pertenceFibonacci = (num) => {
    let a = 0, b = 1;

    if (num === 0 || num === 1) return `O número ${num} pertence à sequência de Fibonacci.`;

    while (b < num) {
        [a, b] = [b, a + b];
    }

    return b === num 
        ? `O número ${num} pertence à sequência de Fibonacci.` 
        : `O número ${num} não pertence à sequência de Fibonacci.`;
};

readline.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (numero) => {
    const parsedNumber = parseInt(numero);

    if (!isNaN(parsedNumber)) {
        console.log(pertenceFibonacci(parsedNumber));
    } else {
        console.log("Por favor, insira um número válido.");
    }

    readline.close();
});