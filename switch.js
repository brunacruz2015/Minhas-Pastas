let produto = 0
process.stdout.write("Digite um numero e veja a classificação do produto"  + ' ' );

process.stdin.once("data", function (data) {
     produto = Number(data.toString().trim());
    

switch (produto) {
    case 1:
     console.log("Alimento não perecivel")   
        break;
    case 2:
     console.log("Alimento perecivel")   
        break;
    case 3:
     console.log("Vestúario")       
        break;
    case 4:
     console.log("Limpeza")   
        break;  
    default:
        console.log("Este produto não existe")  
        break;    
}})



