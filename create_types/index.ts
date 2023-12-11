// Há a possibilidade de gerar novos tipos em Typescript , ja vimos isso com generics.
// Porém existem outros operadores que visam facilitar nossa vida neste assunto
// A ideia deste recurso é deixar a manutenção do projeto mais simples
// Ou seja, gastar mais tempo na estruturação dos tipos e menos na busca de possíveis bugs depois

// Revisão de generics
// Utilizamos generics quando uma função pode aceitar mais de um tipo
// É uma prática mais interessante que o any, que teria um efeito parecido


//como meu argumento recebe o generic e a função tem um retorno de string, independente do argumento que eu passe para a função,
// o generic fará essa conversão para o tipo retornado pela função

function showMessage<T>(arg: T): string{
  return `O argumento é: ${arg}`
}

console.log(showMessage(3))

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Constraints em Generics
 
// As constraints nos ajudam a limitar os tipos aceitos
// Como em genenric podemos ter tipos livres, elas vão filtrar os tipos aceitos
// Adicionando organização quando queremos aproveitar a liberdade dos generics

//nesse cenário, o objeto a ser passado na função, precisa obrigatoriamente possuir uma proprieade name
const showProduct = <T extends {name: string}>(obj: T) => {
  return `O nome do produto é: ${obj.name}`
}

const car = {
  name: "Lancer"
}

// const price = {
//   price: 1231
// }

console.log(showProduct(car))
// console.log(showProduct(price))

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Interfaces com Generics
// com interfaces podemos criar tipos mais complexos para objetos, adicionando Generics podemos deixá-los mais brandos
// aceitando tipos diferentes em ocasiões diferentes

// A lógica é a mesma. Imagine uma situação em que você possui uma interface mas você ainda não sabe o tipo de algumas de suas chaves 

interface Person<T,U> {
  name: string,
  age: T,
  weight: U,
  hability?: string
}

// neste cenário , podemos definir o tipo dos generics na hora da implementação da interface ou ate mesmo criarmos um tipo a usando e definindo os tipos dos generics

type SuperHuman = Person<number,number> 

const flash: SuperHuman = {
  name: "Barry Alen",
  age: 29,
  weight: 90,
  // hability: "Super velocidade"

}

const Allan : Person<number,number> = {
  name: "Allan",
  age: 23,
  weight: 85
}

// console.log(Allan)
// console.log(flash)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Type Parameters
// Type parameters é um recurso de Generics
// Utilizado apra dizer que alguma parâmetro de uma função por exemplo é a chave de um objeto, que também é parâmetro
// Desta maneira conseguimos criar uma ligação entre o tipo genérico e sua chave
// Para isso usamos o operador keyof 

interface Server {
  port: number,
  ip: string
}

function showSomeKey<T, K extends keyof T>(obj: T,key: K){
  return `A chave de ${key.toString()} é ${obj[key]}`
}

const server: Server = {
   port: 12312,
   ip: '127.0.0.1'
}

console.log(showSomeKey(server,'ip'))

// ---------------------------------------------------------------------------------------------------------------------------------------------------