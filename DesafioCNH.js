let possuicnh = ""
let motorista = ""
 

process.stdout.write("Voce possui cnh?");

process.stdin.once("data", function (data) {
    possuicnh = data.toString().trim().toLowerCase()

    if (possuicnh === "sim") {
        console.log("motorista, voce sabe dirigir");
    } else {
        console.log("motorista voce não pode dirigir");
    }
    
    process.exit()
});
    
