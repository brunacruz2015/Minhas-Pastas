let hobbies = [];
console.log("Digite seu hobbies ou peça para 'sair'para terminar:")

process.stdin.on("data", function (data){
    let opção = data.toString().toLowerCase().trim()

    if (opção === 'sair'){
        console.log("aqui estão seus hobbies:");

        hobbies.forEach(function(hobby, index) { 
            console.log((index)+ ' ,'+ hobby);
            });
            process.exit()
            } 

    
    


    
    








   



    


