let resultado
// Potencia 2 elevado a 2 = 4
resultado = Math.pow(2,2);
console.log(resultado);

//Rais Quadrada de 25
resultado = Math.sqrt(25,2);
resultado = 5.50;
console.log(resultado);

//arrendondar numero para cima
resultado = Math.PI;

//arrendondar numero para baixo
resultado = Math.floor(resultado);

//arrendondar para o numero mais proximo
resultado = Math.round(resultado);
//retorna o valor do PI;
resultado = Math.PI;
console.log(resultado.toFixed(4));

// random() / numero aleatorio entre 0 e 1
// Gerar um numero aleatorio entre dois valores quaisquer
resultado = Math.random().toFixed(4);
console.log(resultado);

// resultado = Math.random().(max - min) + min;
resultado = Math.round(Math.random()= (5 -0));
console.log(resultado);

// Gerando um numero aleatorio entre 0 e 10
let resultado1 = Math.floor(Math.random()*(10 - 0))+ 0;

// Selecionar um item aleatorio de um array;
const nomes = ["Luiz","Maria","Helena","Felipe","João"];
const indiceArray = Math.round(Math.random() * nomes.length);
const randomElement = nomes[indiceArray];
aconsole.log(randomElement);
