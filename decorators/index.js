"use strict";
// ---------------------------------------------------------------------------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// O que são decorators?
// Decorators podem adicionar funcionalidades extras a classes e funções
// Basicamente criamos novas funções que são adicionadas a partir de um @nome
// Esta função será chamada assim que o item que foi definido o decorator for executado
// Para habilitar este recurso precisamos adicionar uma configuração no tsconfig.json
// Primeiro decorator
// Vamos criar um decorator com uma function
// Ele pode trabalhar com argumentos especiais que são target: target, propertyKey e descriptor
// Estes são grandes trunfos do decorator, pois nos dão informação do local em que ele foi executado
const myDecorator = () => {
    console.log("iniciando execução de decorator");
    return (target, propertyKey, descriptor) => {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
};
class MyClass {
    showMessage() {
        console.log("Mensagem teste");
    }
    testing() {
        console.log("Finalizando execução de decorator");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "showMessage", null);
const myObj = new MyClass();
myObj.testing();
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Múltiplos decorators
// Podemos utilizar multiplos decorators em TS
// O primeiro a ser executado é o que está mais ***abaixo do código***
// Desta maneira é possível criar operações mais complexas
function first() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou first");
    };
}
function second() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou second");
    };
}
function third() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou third");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Finalizando execução de decorators");
    }
}
__decorate([
    third(),
    second(),
    first()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Decorator de classe
// O decorator de classe está ligado ao constructor
// Ou seja, sempre que este for executado, teremos a execução do decorator
// Isso nos permite acrescentar algo a criação de classes
const classDecFunction = (constructor) => {
    console.log(constructor);
    if (constructor.name === "User")
        console.log("Carregando usuário");
};
let User = class User {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Allan");
    }
};
User = __decorate([
    classDecFunction // note que não há panteses na chamada da função de decorator
], User);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Decorator de método
// Com este decorator podemos modificar a execução de métodos 
// Precisamos inserir o decorator antes da declaração do método
// Ele é executado antes do método
const removeFunctionDecorator = (value) => {
    return (target, propertyKey, descriptor) => {
        descriptor.enumerable = value;
    };
};
class Calculator {
    constructor(operation) {
        this.operation = operation;
        console.log(this);
    }
    resolveOperation() {
        return `A operação a ser realizada será de: ${this.operation}`;
    }
    writeText() {
        console.log("Função que escreve um texto");
    }
}
__decorate([
    removeFunctionDecorator(false)
], Calculator.prototype, "writeText", null);
const calculator = new Calculator("+");
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Acessor decorator
// Semelhante ao decorator de método
// Porém este serve apenas para os getters e setters
// Podemos alterar a execução antes de um set ou get
// Nada muda na sintaxe
class Car {
    constructor(name, km) {
        this.name = name;
        this.km = km;
    }
    get showName() {
        return `nome do carro: ${this.name}`;
    }
    get showKm() {
        return `km rodado: ${this.km}`;
    }
}
__decorate([
    removeFunctionDecorator(true)
], Car.prototype, "showName", null);
__decorate([
    removeFunctionDecorator(true)
], Car.prototype, "showKm", null);
const ferrari = new Car("Ferrari", 20000);
console.log(ferrari);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Property decorator
// O property decorator é utilizado nas propriedades de uma classe
// Ou seja , na hora da definição da mesma podemos ativar uma função
// Isso nos ajuda a modificar ou validar algum valor
const formatNumber = () => {
    return (target, propertyKey) => {
        let value;
        //estrutura de getter 
        const getValue = () => {
            return value;
        };
        //estrutura de setter
        const setValue = (newValue) => {
            value = newValue.padStart(5, "0");
        };
        //passando as informções para o objeto/property a ser modificada/validada
        Object.defineProperty(target, propertyKey, {
            get: getValue,
            set: setValue
        });
    };
};
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber() // properyDecorator sendo chamado antes da definição da prpriedade
], Id.prototype, "id", void 0);
const newId = new Id('1');
console.log(newId);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Exemplo real com class decorator 
// Com class decorator podemos influenciar o constructor
// Neste exemplo vamos criar uma função para inserir data de criação dos objetos
const createdAt = (createdAt) => {
    createdAt.prototype.createdAt = new Date();
};
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdAt
], Book);
let Pencil = class Pencil {
    constructor(id) {
        this.id = id;
    }
};
Pencil = __decorate([
    createdAt
], Pencil);
const book = new Book(12);
const pencil = new Pencil(10);
console.log(book);
console.log(pencil);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Exemplo real com method decorator
// Com method decorator podemos alterar a execução dos métodos
// Neste exemplo vamos verificar se um usuário pode ou não fazer uma alteração no sistema
// A alteração seria o método a ser executado
const verifyIfUserPosted = () => {
    return function (target, key, descriptor) {
        let childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1]) {
                console.log("Usuário ja postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
    };
};
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Conteúdo do post: ${content}`);
    }
}
__decorate([
    verifyIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu primeiro post", newPost.alreadyPosted);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Exemplo real com property decorator
// Com o property decorator conseguimos verificar uma propriedade de um objeto
// Vamos criar uma validação de número máximo de caracteres com decorators
const maxLimit = (limit) => {
    return (target, propertyKey) => {
        let value;
        const getter = () => {
            return value;
        };
        const setter = (newVal) => {
            //newVal guarda o valor da propriedade a ser "decorada" na classe
            if (newVal.length > limit) {
                console.log("O nome só pode ter 10 caracteres");
                return;
            }
            else {
                value = newVal;
                console.log(value);
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
};
class Admin {
    constructor(username) {
        this.userName = username;
    }
}
__decorate([
    maxLimit(8)
], Admin.prototype, "userName", void 0);
const Allan = new Admin("Allan");
