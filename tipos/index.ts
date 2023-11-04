//Arrays
const names: string[] = ["Allan","João"]

names.push("Alfred")

console.log(names)

const numbers: number[] = [1,2,4,5]

numbers.push(243)

console.log(numbers)

//OUTRA SINTAXE

const listItems: Array<string> = ["cola","borracha","sapato"]

listItems.push('mochila')

console.log(listItems)

const numberItems: Array<number> = [1,2,4,5,6]

numberItems.push(989)

console.log(numberItems)



//typo any
//evitar sempre que possível pois anula a tipagem do TS

const arr1: any = [1 ,'text',[],{name: 'Allan'}]

console.log(arr1[3].name)


//tipos em parâmetros de funções

function sum(a: number,b: number){
    console.log(a + b)
}

sum(2,2)

//tipos de retorno em funções

function greeting(name:string): string{
    return 'olá ' + name
}

console.log(greeting("Allan"))

//validando funções anônimas

setTimeout(() => {
  const money = 1200
  // haverá um erro pois parsefloat converte uma string para um float
  //parseFloat(money)
},2000)

//tipándo o objetos

function coordinates (coord: {x: number, y: number}) {
  console.log('COORDINATES X ' + coord.x)
  console.log('COORDINATES Y ' + coord.y)
}

//o objeto a ser passado precisa ter as mesmas propriedades do parâmetro
const objCoordinates = {
  x : 0.20938490,
  y: 123987
}

coordinates(objCoordinates)

//propriedades opcionais
const showMessage = (message: string, sizeMessage: number) => {
  return "A mensagem: " + message +  " possui " + sizeMessage + " letras"
}

const message:string = "O pai de pedro é paulo"
const messageLenght:number = message.length
console.log(messageLenght)

console.log(showMessage(message,messageLenght))
///////////////////////////////////
