let nome ="Bruna"
console.log(nome)
//A variavel serve para armazenar dados em um computador
let numero = 10
let result = true
 if(numero % 2 == 0){
 console.log("Este numero é par")
   result = true
  }else{
    result = false
    console.log("Este numero é impar")
    }


//let //idade = 18
//let //mensagem
//*if (idade >=16){
   //*// mensagem ="Voce pode votar"
  //  }else{
   //     mensagem = "Voce não pode votar"
  //      }
    //    console.log(mensagem)*//
 
/*let idade = 21;
let mensagem;

if (idade >=18){
    mensagem = "Voce pode dirigir"
    }else{
        mensagem = "Voce não pode dirigir"
        }
        console.log(mensagem)*/

/*let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0
let media = 0
for (let i = 0; i< notas.length; i++) {

}       console.log(notas[i]);
     soma = soma + notas[i];
     media = soma / notas.length;
     console.log("media" , media)*/

let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
     let soma = 0
     let media = 0
for (let i = 0; i< notas.length; i ++){
    if (notas[i]>= 6){
        console.log(notas[i])
        notasAcimaMedia ++
    }

}

