// LETRA A
  function imprimeNome(nome) {
      console.log (`Olá, ${nome}!`)
 }
  imprimeNome("Lucas")

//LETRA B
 function imprimeTabuada (num){
         for(let i = 1; i<=10; i++){
         console.log(`${num} x ${i} = ${Number(num)*Number(i)}`)
     }
}
 imprimeTabuada(6)

const imprimeNome2 = (nome) => {
    console.log(`Olá, ${(nome)}!`)
}
imprimeNome2("Lucas")

const tabuada = (num) => {
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${Number(num)*Number(i)}`)
    }
}
tabuada(6)