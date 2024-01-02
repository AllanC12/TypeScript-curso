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
        console.log(descriptor);
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
