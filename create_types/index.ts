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

// console.log(showMessage(3))

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

// console.log(showProduct(car))
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

// console.log(showSomeKey(server,'ip'))

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// keyof Type Operator

// Com o keyof Type Operator podemos criar um novo tipo
// Ele aceita dados do tipo objeto , como object literals e arrays
// e pode criar o tipo baseado nas chaves do objeto passado como parâmetro

interface Character {name: string, age: number, hasDriveLicense: boolean}

//qualquer parâmetro que receber C como tipo precisa obrigatoriamente receber uma chave da interface Character como valor a ser passado
type C = keyof Character

function returnKeyOfObject(obj: Character, key: C) {
  return `${obj[key]}`
}

const person: Character = {
  name: "Allan",
  age: 23,
  hasDriveLicense: false
}

// console.log(returnKeyOfObject(person, 'name'))

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Typeof type operator

// Com o typeof type operator podemos criar um novo tipo
// Este tipo será baseado no tipo de algum dado
// Ou seja , é interessabte para quando queremos criar uma variável com o mesmo tipo da outra por exemplo

const userName: string = "Aurélio"

type userNameType = typeof userName

const userRegistered: userNameType = "Adilson"
// const userRegistered2: typeof userName = "Adilson"

console.log(userRegistered)


// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Indexed acess type

// A abordagem Indexed acess types pode criar um tipo baseado em uma chave de obejeto
// Ou seja , conseguimos reaproveitar o tipo da chave para outros locais como funções


interface Planet {
  diameter: number,
  description: string
}


const earth: Planet = {
  diameter: 12000,
  description: 'Planeta composto por mais de 70% de água'
}

type Size = Planet["diameter"]

const showDetails = (sizePlanet: Size) => {
   return `O  diâmetro do planeta Terra é ${sizePlanet} km`
}

console.log(showDetails(earth.diameter))

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// Conditional Expression type 

// O tipo por condição permite criar um tipo com a base em um if else
// Mas não aceitas expressões tão amplas
// Utilizamos a sintaxe de if ternário

// Imagine a situação em que o tipo da variável necessita de uma verificação


interface A {

}

interface B extends A {

}


type MyType = B extends A ? number : string


const someVar: MyType = 25
