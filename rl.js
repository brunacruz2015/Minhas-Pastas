/*const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
rl.question('Bruna: ',(nome) => {
    console.log("Olá, ${Bruna}!");
   rl.close();
});
let resultado;

rl.question("Digite um numero: ", (num1)=>{
    rl.question("Digite o segundo numero: ", (num2)=>{
        rl.question("Digite o segundo numero: ", (num3)=>{
            
            console.log(typeof num1);
            num1 = parseFloat (num1);
            num2 = parseFloat (num2);
            num3 = parseFloat (num3);
            resultado = num1 + num2 + num3;
            console.log("Valor da operação:" , resultado);
        })
    })
})
*/
 let num1;
 let num2;
 let num3;
 let contador = 0;
 console.log("Digite um numero:");//Mensagem adicionada

 process.stdin.on("data", (data)=>{
    resposta = data.toString().trim();
    contador ++;
    if(contador === 1){
        num1 = parseFloat(resposta);
        console.log("Digite um numero:");
    }else if(contador === 2){
            num2 = parseFloat(resposta);
            console.log("Digite um numero");
    }else if(contador === 3){
                num3 =parseFloat(resposta);
                const resultado = num1 + num2 +num3;
                console.log("valor da operação:", resultado);
                process.exit();
            }
            }
 ) 

            
 


