let numero =""
console.log("Digite um numero e verifique se ele é par ou impar");
process.stdin.once("data", function (data) {

    
    let numero = Number(data.toString().trim())


    let eHpar = numero % 2 === 0

    if (eHpar) {
        console.log ("par")
    }else {
        console.log ("impar")
process.exit()
    }});
