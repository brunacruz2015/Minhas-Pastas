let tabuada =""
process.stdin.write('Digite a tabuada desejada: ')

process.stdin.once('data',function (data) {
    tabuada = parseInt (data);
}
    if (isNaN(tabuada)) {
        console.log('Isso não é um numero valido.');
        }

    for (let i = 0; i <= 10; i++) {
        console.log(`${tabuada} x ${i} = ${tabuada * i}`);
) }
process.exit()


