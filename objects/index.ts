// 1 - Interface como tipo em parâmetro de função
// Essa abordagem é a mais utilizada para tiparmos objetos em parametros de funções
// isso evita repetição de código

interface Product {
    name: string
    price: number
}

const detailsProduct = (product: Product) => {
    console.log(`Nome do produto: ${product.name}\nPreço do produto: ${product.price}`)
}



const computer: Product = {
    name: "Acer Aspire 5",
    price:  3500
}

// detailsProduct(computer)

// ---------------------------------------------------------------------------------------------------------------------------------------------------


//Em interfaces podemos utilizar tambem o conceito de propriedades opcionais , seguindo a mesma ideia com o ?
// a idade do usuário neste cenário é opcional
interface UseriInitial {
   hasPermissions: boolean
   age?: number
}


const registerUser = (user: UseriInitial) => {
 const date = new Date()
 const year: number = date.getFullYear()
  if(user.hasPermissions){
    return "Usuário com permissões"
  }else if(user.age){
      return `Usuário nascido em ${year - user.age}`
  }

}


const userOne: UseriInitial = {
    hasPermissions: false,
    age: 23
}

// console.log(registerUser(user))

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// readonly property
// Este conceito replica exatamente a mesma lógica das constantes do javascipt convencional
// uma propriedade com readonly não pode ser alterada, apenas lida

interface User {
  readonly isAdmin: boolean
  name: string
}

const verifyUser = (userCurrent: User): void => {
    if(userCurrent.isAdmin){
        console.log('Usuário com credenciais')
    }
    console.log("Seja bem vindo " + userCurrent.name)
}

const userCurrent: User = {
    isAdmin: true,
    name: "Allan"
}

verifyUser(userCurrent)

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// index signature
// utilizamos index signature quando não sabemos o nome das chaves mas ja sabemos quais os tipos de um objeto ou array
// isso restringe a tipos que não devem ser utilizados

interface CoordObject{
    [index: string]: number
}

const coord: CoordObject = {
    x: 25230
}

coord.y = 12341

// console.log(coord)

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// extending interfaces

// Este conceito é definido como a capacidade de uma interface herdar proprieades de outra.
// (a mesma herança aplicada as classes de javascript na orientação a objetos)

interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]
}

const allan: Human = {
    name: "Allan",
    age: 23
}

const homelander: SuperHuman = {
    name: "Homelander",
    age: 45,
    superpowers: ["Raios laser","super força"]
}

// console.log(homelander.superpowers[1])

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// Intersection types
// este conceito se resume na possibilidade de concatenarmos duas interfaces e criarmos tipos mais complexos usando o & (E comercial)

interface Character {
    name: string
}

interface Superpower {
   hability: string
}

type CharacterPowerfull = Character & Superpower

const deadpool: CharacterPowerfull = {
    name: "deadpool",
    hability: "Fator de cura"
}

// console.log(deadpool)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// ReadOnlyArray

// O ReadOnlyArray é um tipo que deixa os itens como readonly
// Podemos aplicar um tipo para os itens do array, alem desta propriedade especial
// A modificação dos itens pode ser feita através do método, mas não podemos aumentar o array por exemplo


const fruitArray: ReadonlyArray<string> = ['mamão','Maçã','banana']

// Não é permitido nenhuma alteração por atribuição com o sinal de =
// fruitArray[3] = "uva"

// mas conseguimos fazer alterações usando métodos para percorrê-lo
fruitArray.forEach((item) => {
    console.log("fruta: " + item)
})

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Tuplas

// Tupla é um tipo de array , porém definimos a quantidade e o tipo de elementos
// Basicamente criamos um novo type, e nele inserimos um array com os tipos necessários
// Cada tipo conta também como elemento

type FiveNumbers = [number,number,number,number,number]

const arrayNumbers: FiveNumbers = [1,2,3,4,5]

// A posição e o tipo precisam ser exatos ao da definição da tupla
type NameAndAge = [string,number]

const dataUser: NameAndAge = ["Allan",23]

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// Tuplas com readonly

// Podemos criar tuplas com a propriedade de readonly 
// é um tipo de dado super restrito pois limita quantos itens teremos, qual o tipo de cada um e também não são modificáveis

const showNumbers = (numbers: readonly [number,number,number]): void => {
     console.log(numbers[0])
     console.log(numbers[1])
     console.log(numbers[2])
}

showNumbers([1,2,3])