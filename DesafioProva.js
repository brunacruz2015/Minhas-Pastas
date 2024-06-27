
            


 let notas = []
 
 
console.log("Digite a nota 1");
process.stdin.once("data", function (data) {
    let notas1 = Number(data.toString().trim());
    notas.push(nota1);

    console.log("Digite a nota 2");
process.stdin.once("data", function (data) {
    let notas2 = Number(data.toString().trim());
    notas.push(notas2);
    

    console.log("Digite a nota 3");
process.stdin.once("data", function (data) {
    let notas3 = Number(data.toString().trim())
    notas.push(notas3)
    console.log(notas1, notas2, notas3)

    let result = ((notas[0]+notas[1]+notas[2]) / 3);

    console.log("A media das 3 notas eh" + result)

    if (notas[0] > notas[1] && notas[0] > notas[2]){
        console.log ("A maior nota eh a nota 1" + notas[0]){ else if (notas)[2]){
            console.log("A maior nota eh a nota 2" + notas[1])
             } else {
                console.log("Amaior nota eh a nota 3 " + notas[2]) 
{
    process.exit()
    
        


    




    
    




