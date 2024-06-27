let nota = []
let aluno = ""

console.log("Digite o seu nome");
process.stdin.once("data",function(data){
    aluno = (data.toString().trim());


console.log("Digite a nota 1");
process.stdin.once("data",function(data){
    let nota1=Number(data.toString().trim());
    nota.push(nota1);

console.log("Digite a nota 2");
process.stdin.once("data",function(data){
    let nota2=Number(data.toString().trim());
    nota.push(nota2);

 console.log("Digite a nota 3");
process.stdin.once("data",function(data){
    let nota3=Number(data.toString().trim());
    nota.push(nota3);

console.log("Digite a nota 4");
process.stdin.once("data",function(data){
    let nota4=Number(data.toString().trim());
    nota.push(nota4);

    let result=((nota[0]+nota[1]+nota[2]+nota[3]) /4)

console.log("A media das 4 notas é " + result + " " + aluno)

if(result>=7){
    console.log("Parabens voce passou")
    }else{
        console.log("Voce reprovou")
    }
    
process.exit()

}) 
})
})
})
})