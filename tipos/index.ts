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

