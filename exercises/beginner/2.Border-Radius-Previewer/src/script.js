const inputs = document.querySelectorAll('#grid > input') // todos os inputs dentro da div com id grid
const quadrado = document.querySelector('[border-radius]') //border-radius area

setInterval(() => {
    const arrayInputs = [] 
    inputs.forEach(element => arrayInputs.push(element.value)) // add inputs ao Array Inputs
    convertAndCalculate(arrayInputs)

}, 1000)


// const buttonResult = document.querySelector('[result]') //button Result
// buttonResult.onclick = function() { // onclick Result
//     const arrayInputs = [] 
//     inputs.forEach(element => arrayInputs.push(element.value)) // add inputs ao Array Inputs
//     convertAndCalculate(arrayInputs) // invoca função passando como parâmetro arrayInputs
// }

const buttonReset = document.querySelector('[reset]') //button Reset
buttonReset.onclick = function() { // onclick Reset
    inputs.forEach(element => {
        element.value = '0' // altera todos os inputs para o value 0
        quadrado.style.borderRadius = '0px' // altera o border radius do quadrado para zero em todos os lados
    })
}


//recebe o array de inputs e verifica os dados fazendo alterações necessárias
function convertAndCalculate(arrayInputs) {
    const resultado = []

    for(let i in arrayInputs) {
        if(isNaN(parseInt(arrayInputs[i]))) {
            arrayInputs[i] = 0
        }        
    }

    resultado[0] = (parseInt(arrayInputs[7]) + parseInt(arrayInputs[0])) / 2 
    resultado[1] = (parseInt(arrayInputs[1]) + parseInt(arrayInputs[2])) / 2
    resultado[2] = (parseInt(arrayInputs[3]) + parseInt(arrayInputs[4])) / 2 
    resultado[3] = (parseInt(arrayInputs[5]) + parseInt(arrayInputs[6])) / 2

    borderRadius(resultado)
}


// Altera o style do quadrado border-radius
function borderRadius(convertedArray) { 
    const values = `${convertedArray[0]}px ${convertedArray[1]}px ${convertedArray[2]}px ${convertedArray[3]}px` // quebra os valores recebido como parâmetro, convertendo em string
    quadrado.style.borderRadius = values // altera o estilo border-radius
    areaTransfer(values) //passa values como parâmetro para poder ser copiado na área de transferência
}

// função para usuário copiar área de transferência. 
function areaTransfer(value){
    const copyArea = document.querySelector('[copy-area]') // pega o input com identificador personalizado
    const buttonCopy = document.querySelector('[button-copy]') // pega button com identificar personalizado
    copyArea.value = value // add o parâmetro recebido na função ao valor do input

    // comportamento ao clicar no button
    buttonCopy.onclick = function() {
        copyArea.select() // seleciona o valor do input
        document.execCommand('copy') // copia o valor
        alert('Copied Text: ' + value) // alert para avisar ao usuário que valor foi copiado 
    }
}