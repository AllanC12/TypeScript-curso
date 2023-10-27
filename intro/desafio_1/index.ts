function sum(numberOne:number,numberTwo:number){
    return numberOne + numberTwo
}

console.log(sum(4,6))

function returnNewMessage(message:string) :string{
    return message
}

const returnMessage = (message:string) => {
 return message
}

const message:string = 'learning typescript'

const newMessage = 'testing typescript'

console.log(returnNewMessage(newMessage))

console.log(returnMessage(message))

