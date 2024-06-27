let inteiro = 0

console.log("Digite um numero")
process.stdin.on("data", function (data) {
    inteiro = Number(data.toString().trim());
         console.log('Este é o meu numero antecessor' + (inteiro - 1));
         
         console.log("Este numero numero sucessor"+ (inteiro + 1));

         console.log("Este é o meu numero digitando"+ inteiro)
})

