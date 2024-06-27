let numero1 = [1,2,3,4,5,6,7,8,9,10]
let numero2 =""
console.log("Digite um numero e verifique se ele esta na lista")

process.stdin.once("data", function (data){
   let numero2= Number(data.toString().toLowerCase().trim())

   if(numero1.includes(numero2)){
           console.log("O numero esta incluso!")
       }else{
           console.log("o numero não esta incluso")
       }
       process.exit()
   
})

