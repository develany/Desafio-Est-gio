const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const contarA = (string) => {
    const regex = /a/gi; 
    const ocorrencias = string.match(regex); 
    const contagem = ocorrencias ? ocorrencias.length : 0;
    
    return contagem > 0 
        ? `A letra 'a' aparece ${contagem} vezes na string.` 
        : `A letra 'a' não aparece na string.`;
};

// Captura a entrada do usuário no Node.js
readline.question('Digite uma palavra ou frase para verificar a quantidade de "a": ', (palavra) => {
    console.log(contarA(palavra));
    readline.close();
});
