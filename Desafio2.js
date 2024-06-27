
let numerosrandom = Math.floor(Math.random()*15) 
let tentativas = 3
let entradas;
console.log(numerosrandom)
console.log("Digite um numero de 0 a 14");

process.stdin.on("data", function (data) {
    numero = data.toString().trim().toLowerCase()
 
    
    if (numerosrandom == entradas) {
        console.log("Esta correto ")
    }else if (entradas != numerosrandom)
        console.log("Tente outra vez")
       tentativas --
    if (0>= tentativas){
        console.log("Voce perdeu")
        process.exit()

}
})


