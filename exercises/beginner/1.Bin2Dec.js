process.stdout.write('Informe no máximo 8 números bińarios (0,1). Digite 8 valores separado por vírgula : ')
process.stdin.on('data', data => {
    const args = data.toString().replace('\n','').split(',')
        
    if (args.length > 8) {
        console.error('Erro: Foi digitado mais de 8 números')
        process.exit()
    }

    //find number distinct !== 0 or 1
    for (let i of args) {
        if (!(i === '0' || i === '1')) {
            console.error('Erro: Números diferentes de 0 ou 1')
            process.exit()
        }
    }
    
    function calculo(elem, index) {
        return elem * (2**index)
    }

    const converteBin2Dec = function(){
        let valor = 0
        args.reverse().forEach((elem, index) => valor += calculo(parseInt(elem), index))
        return valor
    }  
    
    console.log('Resultado =', converteBin2Dec())
    process.exit()
})

