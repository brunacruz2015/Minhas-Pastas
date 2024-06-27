let cafe = ""



process.stdout.write("voce gosta de cafe?");
process.stdin.once("data", function (data) {


    cafe = data.toString().trim().toLowerCase()

    if (cafe == "sim") {

        console.log("que bom que voce gosta de cafe");

    } else {
    
        console.log("que pena que voce não gosta de cafe")
    }
    

    process.exit()
});



    






