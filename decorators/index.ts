// ---------------------------------------------------------------------------------------------------------------------------------------------------

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
    console.log("iniciando execução de decorator")

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("Executando decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class MyClass {
    @myDecorator()

    showMessage(){
        console.log("Mensagem teste")
    }
    
    testing(){
        console.log("Finalizando execução de decorator")
    }
}

const myObj = new MyClass()

myObj.testing()

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Múltiplos decorators
// Podemos utilizar multiplos decorators em TS
// O primeiro a ser executado é o que está mais ***abaixo do código***
// Desta maneira é possível criar operações mais complexas

function first () {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou first")
    }
}
function second () {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou second")
    }
}
function third () {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou third")
    }
}

class MultipleDecorators {
    @third()
    @second()
    @first()
    testing() {
      console.log("Finalizando execução de decorators")
    }
}