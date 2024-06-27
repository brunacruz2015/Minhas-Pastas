const readline = require("readline");

const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let resultadoC;
let resultadoK;
let resultadoF;

rl.question("Digite'F' para Fahrenheit,'C'para Celsius e 'K'para Kelvin:",(entrada)=>{
    if (entrada === "F" || entrada === "c" || entrada ==="K"){
      const conversor = entrada;
      rl.question("Agora digite uma temperatura:",(temperatura)=>{
let temp= Number(temperatura);
    if(Number.isNaN(temp)){
        console.log("Insira uma temperatura valida.");
        rl.close()
      }else{
    if(conversor ==="F"){
        resultadoC =(temp -32)/1.8;
    }
    }
    }    
      })

    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        entrada === "K"){

        }
    }
})

