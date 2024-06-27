let pessoa = {

    nome: "Bruna" ,
    idade: 26 ,
    cnh: "tenho"
    };

        console.log(pessoa);

Processstdout.write("Qual é o seu nome? /n");

let usuario = {
    nome: "Bruna",
    idade: "26" ,
    temCnh: "sim",
    };

    process.stdin.on("data",function (data){
        function (data) {
            if (!usuario.nome){
                usuario.nome =
                data.toString().trim();

    process.stdout.write("Quantos anos voce tem? \n");
            }else if (!usuario.idade){
                usuario.idade =
                data.toString().trim();

                process.stdout.write("Olá" + usuario.nome+",voce tem" +usuario.idade +"anos. \n");
                process.stdout.write("Voce possui CNH? (Sim ou Não)\n");
            }else{

                usuario.temCNh = data.toString().trim().toLowerCase();
                if (usuario.temCnh == "sim") {
                    process.stdout.write("Parabéns,"+usuario.nome +"!Voce  pode dirigir. \n");
                    }
                    { else {
                        process.stdout.write("Infelizmente," + usuario.nome +)

    )};





 


