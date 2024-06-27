// var x = 10
// console.log ("var: ", x); // 10
// x = 20;
// console.log( "var: ", x); // 20
// let y = 10;
// console.log("let: ", y); // 10
// y = 20;
// console.log("let: " , y); // 20
// const z = 10;
// console.log("const: " , z);
let entradaUsuario = '';
process.stdin.once('data' , function (data) {
entradaUsuario = data.toString();
console.log('Voce digitou:', entradaUsuario);
process.exit ();
});


let nome = "";
let idade = "";

console.log("Qual é o seu nome?");

process.stdin.once("data",function(data){
nome = data.toString();

console.log("Quantos anos voce tem?");

})

