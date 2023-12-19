//1 - types

const x: number = 10

// ---------------------------------------------------------------------------------------------------------------------------------------------------

//type number

//type string
const message: string = 'mensagem em typescript'

const messageUpper = message.toUpperCase()

let confirmMessage: boolean = false

// ---------------------------------------------------------------------------------------------------------------------------------------------------



//2 - type inference e type annotation

//deixar o tipo da variável explícito é chamado de type annotation
let annotation: string = "mensagem por type annotation"

// ---------------------------------------------------------------------------------------------------------------------------------------------------


//deixar o tipo da variável subentendido é chamado de type inference
let inference = 'mensagem por inferencia'

// ---------------------------------------------------------------------------------------------------------------------------------------------------


console.log(inference + ' ola')


let amount: number = 20

let amountString = amount.toString()

let finalMessage = `Pedalei ${amountString}kms até chegar em casa`

console.log(finalMessage)