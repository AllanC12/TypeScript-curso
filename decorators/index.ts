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


const multiple = new MultipleDecorators()

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Decorator de classe
// O decorator de classe está ligado ao constructor
// Ou seja, sempre que este for executado, teremos a execução do decorator
// Isso nos permite acrescentar algo a criação de classes

const classDecFunction = (constructor: Function) => {
    console.log(constructor)
    if(constructor.name === "User") console.log("Carregando usuário")

}

@classDecFunction    // note que não há panteses na chamada da função de decorator
class User {
    name
    constructor(name: String){
        this.name = name
    }

    showName(){
        console.log("Allan")
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Decorator de método
// Com este decorator podemos modificar a execução de métodos 
// Precisamos inserir o decorator antes da declaração do método
// Ele é executado antes do método

const removeFunctionDecorator = (value: boolean) =>{
    return (target: any, propertyKey: string, descriptor:PropertyDescriptor) => {
       descriptor.enumerable = value
    }
}


class Calculator {
    operation
    constructor(operation: string){
        this.operation = operation
        console.log(this)
    }

    resolveOperation(){
        return `A operação a ser realizada será de: ${this.operation}`
    }
    
    @removeFunctionDecorator(false)
    writeText(){
        console.log("Função que escreve um texto")
    }
}

const calculator = new Calculator("+")

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Acessor decorator
// Semelhante ao decorator de método
// Porém este serve apenas para os getters e setters
// Podemos alterar a execução antes de um set ou get
// Nada muda na sintaxe


class Car {
    name?
    km?

    constructor(name: string, km: number){
        this.name = name
        this.km = km
    }

    @removeFunctionDecorator(true)
    get showName(){
        return `nome do carro: ${this.name}`
    }

    @removeFunctionDecorator(true)
    get showKm() {
        return `km rodado: ${this.km}`
    }
}

const ferrari = new Car("Ferrari",20000)

console.log(ferrari)

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Property decorator
// O property decorator é utilizado nas propriedades de uma classe
// Ou seja , na hora da definição da mesma podemos ativar uma função
// Isso nos ajuda a modificar ou validar algum valor

const formatNumber = () => {
    return (target: Object, propertyKey: string) => {
        let value: string
        
        //estrutura de getter 
        const getValue = () => {
            return value
        }
        //estrutura de setter
        const setValue = (newValue: string) => {
            value = newValue.padStart(5,"0")
        }

        //passando as informções para o objeto/property a ser modificada/validada
        Object.defineProperty(target,propertyKey, {
            get: getValue,
            set: setValue
        })
    }
}

class Id {
    @formatNumber() // properyDecorator sendo chamado antes da definição da prpriedade
    id
    constructor(id: string){
        this.id = id
    }
}

const newId = new Id('1')

console.log(newId)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Exemplo real com class decorator 
// Com class decorator podemos influenciar o constructor
// Neste exemplo vamos criar uma função para inserir data de criação dos objetos

const createdAt = (createdAt: Function) =>{
    createdAt.prototype.createdAt = new Date()
}

@createdAt
class Book {
    id
    createdAt?: Date
    constructor(id: number){
        this.id = id
    }
}

@createdAt
class Pencil {
    id
    createdAt?: Date
    constructor(id: number){
        this.id = id
    }
}

const book = new Book(12)
const pencil = new Pencil(10)

console.log(book)
console.log(pencil)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Exemplo real com method decorator
// Com method decorator podemos alterar a execução dos métodos
// Neste exemplo vamos verificar se um usuário pode ou não fazer uma alteração no sistema
// A alteração seria o método a ser executado

const verifyIfUserPosted = () => {
   return function (target: Object,key: Symbol | string, descriptor: PropertyDescriptor) {
     let childFunction = descriptor.value
     
     descriptor.value = function (...args: any[]) {
        if(args[1]){
         console.log("Usuário ja postou")
         return null
        }else{
         return childFunction.apply(this,args)
        }
     }

   }
}

class Post {
    alreadyPosted:boolean = false

    @verifyIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true;
        console.log(`Conteúdo do post: ${content}`);
    }
}

const newPost = new Post()

newPost.post("Meu primeiro post",newPost.alreadyPosted)
newPost.post("Meu primeiro post",newPost.alreadyPosted)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Exemplo real com property decorator
// Com o property decorator conseguimos verificar uma propriedade de um objeto
// Vamos criar uma validação de número máximo de caracteres com decorators


const maxLimit = (limit: number) => {
  return (target: Object, propertyKey: string) => { 
    let value: string
    
    const getter = () => {
        return value
    }
    
    const setter = (newVal: string) => {
        //newVal guarda o valor da propriedade a ser "decorada" na classe
        if(newVal.length > limit){
            console.log("O nome só pode ter 10 caracteres")
            return
        }else{
            value = newVal
            console.log(value)
        }
    }

    Object.defineProperty(target,propertyKey,{
        get: getter,
        set: setter
    })
  }
}

class Admin {
    @maxLimit(8)
    userName
    constructor(username: string){
        this.userName = username
    }
}

const Allan = new Admin("Allan")