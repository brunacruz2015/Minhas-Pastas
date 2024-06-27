//Pedir para o usuario digitar o seu nome
process.stdout.write("digite sua idade");

//Ler o que o usuário digitou
process.stdin.once("data", function (data) {
const YEAR =2024;
//Ler a idade
let idade =parseInt(data,toString().trim());
let ano = YEAR -idade;

// Exibir uma mensagem personalizada com as Informações do usuario
process.stdout.write("Ola voce nasceu em: " + ano);
 
//Encerrar o programa
process.exit();
});
