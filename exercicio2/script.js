function soma(num1,num2){
    console.log(`${num1} + ${num2} = ${ num1 + num2}`)
}
soma((+prompt("Digite um numero")),+prompt("Digite outro numero"))

function compare (num1, num2){
    console.log (`${num1} é maior que ${num2}? ${num1>num2}`)
}
compare((+prompt("Digite um numero")), (+prompt("Digite outro numero")))

function verificaPar (num1){
    if (num1%2===0){
        console.log(`${num1} é par`)
    } else{
        console.log(`${num1} é impar`)
    }
}
verificaPar(+prompt("Digite sua idade"))

function mensagemTexto(texto){
    console.log(`Sua mensagem possui ${texto.length} caracteres`)
    console.log(texto.toUpperCase())
}
mensagemTexto(prompt("Qual seu nome?"))