const aluno = [

    {nome:'igor', idade: 16, contado: '(42 95458-5885)'},
    {nome:'bruna', idade: 26, contado: '(42 99819-4996)'},
    {nome:'anna', idade: 18, contado: '(42 98869-4856)'},
    {nome:'maria', idade: 62, contado: '(42 99458-5685)'},

    aluno.forEach(function(item, index){
        if (item.idade >= 18 ){
            console.log(`${item.nome} tem ${item.idade} ele é de maior`)
    }else if (item.idade < 18 ){
        console.log(`${item.nome} tem ${item.idade} ele é de menor`)
     } console.log(item.contato)
    )}
]