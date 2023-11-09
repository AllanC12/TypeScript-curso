"use strict";
//Arrays
const names = ["Allan", "João"];
names.push("Alfred");
console.log(names);
const numbers = [1, 2, 4, 5];
numbers.push(243);
console.log(numbers);
//OUTRA SINTAXE
const listItems = ["cola", "borracha", "sapato"];
listItems.push('mochila');
console.log(listItems);
const numberItems = [1, 2, 4, 5, 6];
numberItems.push(989);
console.log(numberItems);
//typo any
//evitar sempre que possível pois anula a tipagem do TS
const arr1 = [1, 'text', [], { name: 'Allan' }];
console.log(arr1[3].name);
//tipos em parâmetros de funções
function sum(a, b) {
    console.log(a + b);
}
sum(2, 2);
//tipos de retorno em funções
function greeting(name) {
    return 'olá ' + name;
}
console.log(greeting("Allan"));
//validando funções anônimas
setTimeout(() => {
    const money = 1200;
    // haverá um erro pois parsefloat converte uma string para um float
    //parseFloat(money)
}, 2000);
//tipándo o objetos
function coordinates(coord) {
    console.log('COORDINATES X ' + coord.x);
    console.log('COORDINATES Y ' + coord.y);
}
//o objeto a ser passado precisa ter as mesmas propriedades do parâmetro
const objCoordinates = {
    x: 0.20938490,
    y: 123987
};
coordinates(objCoordinates);
//propriedades opcionais
const showMessage = (message, sizeMessage) => {
    return "A mensagem: " + message + " possui " + sizeMessage + " letras";
};
const message = "O pai de pedro é paulo";
const messageLenght = message.length;
console.log(messageLenght);
console.log(showMessage(message, messageLenght));
///////////////////////////////////
//podemos validar os parâmetros opcionais para garantir que eles chegaram ou não
// o primeiro argumento de uma função nunca pode ser opcional
const mathOperation = (firstNumber, secondNumber, thirdNumber) => {
    if (thirdNumber !== undefined) {
        return firstNumber + secondNumber / thirdNumber;
    }
    return firstNumber * secondNumber;
};
console.log(mathOperation(1, 2, 3));
// union type. Uma forma de atribuir mais de um tipo a uma variavel.
const requestInServer = (port) => {
    return `connecting on server in port ${port}`;
};
console.log(requestInServer("3000"));
// sintaxe
let variable = [1, 'mensagem'];
//tambem podemos validar os dados que são union types pra tomar uma decisão baseado em cada tipo de dado entrado na função
function validateRole(userRole) {
    if (typeof userRole === "boolean") {
        return "usuário não possui credenciais";
    }
    return 'função de usuário: Admin';
}
console.log(validateRole("teste"));
