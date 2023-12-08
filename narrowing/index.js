"use strict";
//Narrowing --> o conceito se resume em verficar os tipos dos dados recebidos para exibir a resposta adequada para cada tipo de retorno
// typeof type guard --> neste método usamos o typeof para verificar e tratar os tipos de respostas
function sumNumber(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else {
        console.log('Impossível realizar a soma');
    }
}
// sumNumber(2,2)
// sumNumber('12','123')
// sumNumber('23123',12312)
// checando se valor existe
function operation(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((acc, index) => acc + index);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((acc, index) => acc * index);
            console.log(multiply);
        }
    }
    else {
        console.log('Insira uma operação');
    }
}
// operation([1,2,3],'sum')
// operation([2,4,7],'multiply')
//O operador instanceof server para verificar se tal dado é á instância de tal classe
class User {
    constructor(name) {
        this.name = name;
        this.userType = "User";
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
        this.userType = "SuperUser";
    }
}
const jhon = new User('John');
const paul = new SuperUser('Paul');
// console.log(jhon)
// console.log(paul)
const greeting = (user) => {
    if (user.userType === 'User') {
        console.log(`Hello ${user.name}!`);
    }
    else if (user.userType === "SuperUser") {
        console.log(`Hello ${user.name}, desire you see a systems call?`);
    }
};
// greeting(paul)
// greeting(jhon)
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const jake = new Dog("Jake", "Husky siberiano");
const tonky = new Dog("Tonky");
const showDogDetails = (dog) => {
    if ("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro não possui uma raça definida");
    }
};
// showDogDetails(jake)
// showDogDetails(tonky)
const feedbackUser = (feedback) => {
    if (feedback) {
        switch (feedback) {
            case 1:
                console.log('Nota 1 enviada pelo usuário');
                break;
            case 2:
                console.log("Nota 2 enviada pelo usuário");
                break;
            case 3:
                console.log("Nota 3 enviada pelo usuário");
                break;
            case 4:
                console.log("Nota 4 enviada pelo usuário");
                break;
            case 5:
                console.log("Nota 5 enviada pelo usuário");
                break;
        }
    }
    else {
        console.log("Feedback não enviado");
    }
};
feedbackUser();
