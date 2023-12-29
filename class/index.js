"use strict";
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Campos em classes
// Em TS podemos adicionar novos campos a uma classe  , ou seja , iniciar a classe com campos para os futuros dados dos objetos
// Que serão as propriedades dos objetos instanciados
// Estes campos podem ser tipados também
// Note que um campo sem valor inicial deve ser declarado com !
class User {
}
const Allan = new User();
Allan.name = "Allan";
Allan.age = 23;
// console.log(Allan)
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Constructor
// Constructor é uma função que nos da a possibilidade de iniciar o objeto com valores nos seus campos
// Isso faz com que não precise de mais da !
// Provavelmente todos os campos serão preenchidos na hora de instanciar um objeto
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const John = new NewUser("John Smith", 35);
// console.log(John)
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// campo readonly
// Podemos iniciar o campo com valor e torná-lo readonly
// ou seja será um valor somente para consulta
// Não podemos alterar este valor ao longo do programa
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const lancer = new Car("Lancer Evo X");
// console.log(lancer)
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Herança e super
// Para gerar uma herança utilizamos a palavra reservada extends
// Depois vamos precisar passar as propriedades da classe pai para ela quando instanciarmos um objeto
// Isso será feito com a função super
class Machine {
    constructor(name) {
        this.name = name;
        this.size = 23;
    }
}
const trator = new Machine("Trator");
// console.log(trator)
class DoctorMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const TheMoment = new DoctorMachine("The Moment", 1);
// console.log(TheMoment)
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Métodos
// Métodos são como funções das classes
// Podemos criá-los junto de classes e os objetos podem utilizá-los
// É uma maneira de adicionar funcionalidades as classes
class Character {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        // console.log(`Hi, I am the ${this.name}`)
    }
}
const Doctor = new Character("Doctor");
// console.log(Doctor)
Doctor.greeting();
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// O uso da palavra this 
// A palavra reservada this serve para nos referirmos ao objeto em si
// Ou seja conseguimos acessar suas propriedades
// Esta funcionaliodade se comporta da mesma forma que em Javascript
class Truck {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Marca ${this.name} contendo HP: ${this.hp}`);
    }
}
const truck = new Truck("volvo", 500);
// console.table(truck)
// truck.showDetails()
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Utilizando getters
// Os getters são uma forma de retornar propriedades do objeto
// Porém podemoes modificá-las neste retorno, isso é muito interessante
// Ou seja, é um método pra ler propriedades
// Os getters precisam obrigatoriamente retornar valores e os chamamamos como se fossem propriedades
// Ou seja, não usamos os parentes convencionais como nas funções ()
class HandleNumbers {
    constructor(initial, second) {
        this.initial = initial;
        this.second = second;
    }
    get sumNumbers() {
        return this.initial + this.second;
    }
}
const manipulateNumbers = new HandleNumbers(2, 4);
// console.log(manipulateNumbers.sumNumbers)
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Utilizando setters
// Os getters leem propriedades , os setters as modificam/atribuem
// Logo podemos fazer validações antes de inserir uma propriedade
// Os setters tambem funcionam como métodos
// Note que a sintaxe para chamar os setters e passar os valores pros parâmetros é feito através de atribuição
class Coords {
    set fillX(x) {
        if (x === 0)
            return;
        this.x = x;
    }
    set fillY(y) {
        if (y === 0)
            return;
        this.y = y;
    }
    get showCoords() {
        return `Coord X: ${this.x} 
Coord Y: ${this.y}`;
    }
}
const coords = new Coords();
coords.fillX = 21312;
coords.fillY = 11231;
class HandleTitle {
    constructor(title) {
        this.title = title;
    }
    showTitle() {
        return `meu título de blog é "${this.title}"`;
    }
}
const blog = new HandleTitle("Blog noturno");
// console.log(blog.showTitle())
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Override de métodos
// O override de métodos é uma técnica utilizada para substituir um método de uma classe que herdamos algo
// Basta criar o método com o mesmo nome na classe filha
// Isso caracteriza o override
class Base {
    showName(name) {
        return `meu nome é ${name}`;
    }
}
// Método showName está sendo sobreecrito na segunda classe
class NewBase extends Base {
    showName(name) {
        return name.toUpperCase();
    }
}
const myClass = new NewBase();
// console.log(myClass.showName(`Allan`))
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Visibilidade
// Visibilidade é o conceito de expor nossos métodos de classes
// Public: visivbilidade default, pode ser acessado em qualquer lugar
// Protected: acessível somente nas sublclasses da classe do método , para acessar uma propriedade precisamos de um método
// Private: apenas a classe que declarou o método pode utilizar
// Visibilidade: public
// o public é o modo default de visibilidade
// Ou seja , ja está implícito e nao precisamos declarar
// Basicamente qualquer método ou propriedade de classe pai estará acessível na classe filha
class DadClass {
    constructor() {
        this.property = 10;
    }
}
const dadClass = new DadClass();
console.log(dadClass.property);
class SonClass extends DadClass {
}
const sonClass = new SonClass();
console.log(sonClass.property);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Visibilidade: protected
// Os itens protected podem ser utilizados apenas em subclasses
// Uma propriedade só pode ser acessada por um método, por exemplo:
// O mesmo acontece com métodos
// Adicionando uma camada de segurança ao código em uma classe
class A {
    constructor() {
        this.property = 12312;
    }
    divideProperty() {
        return this.property / 2;
    }
}
class B extends A {
    showProtectedProperty() {
        console.log(this.property);
    }
    calculateDivision() {
        // métodos protected tamberm precisam ser repassados para métodos dentro das subclasses
        return this.divideProperty();
    }
}
const bInstance = new B();
console.log(bInstance.calculateDivision());
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// visibilidade: private
// Os itens private, propriedades e métodos, so podem ser acessados na classe que os definiu
// E ainda precisam de métodos para serem acessados
// Esta é a maior proteção para propriedades e métodos
class PrivateClass {
    constructor() {
        this.name = 'Allan';
    }
    showName() {
        return this.name;
    }
    calculateAge(year, bothYear) {
        this.age = year - bothYear;
        return `Você possui ${this.age} anos de idade`;
    }
    showAge(year, bothYear) {
        return this.calculateAge(year, bothYear);
    }
}
const privClass = new PrivateClass();
class NewClass extends PrivateClass {
    getAge(year, bothYear) {
        return this.showAge(year, bothYear);
    }
}
const newClass = new NewClass();
console.log(newClass.getAge(2023, 2000));
// propriedade name so é acessível dentro da própria classe e mesmo assim precisamos usar um método
console.log(privClass.showName());
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Static members
// Podemos criar propriedades e métodos estáticos em classes
// isso faz com que o acesso ou a utilização não dependam de objetos
// Podemos utilizá-los a partir da própria classe
class StaticClass {
    static methodStatic(message) {
        console.log(message);
    }
}
StaticClass.propertyStatic = "Propriedade estática";
console.log(StaticClass.propertyStatic);
StaticClass.methodStatic("Mensagem de método estático");
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Generic class
// Podemos criar classes com tipos genéricos tambem
// Ou seja, as propriedades dos argumentos podem ter os tipos definidos na hora da instância 
// Isso nos permite maior flexibilidade em uma classe
class GenericClass {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const firstItem = new GenericClass("Itens", "genéricos");
console.log(firstItem);
const boolClass = new GenericClass(true, true);
console.log(boolClass);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Parameter properties
// Parameters properties é um recurso para definir a privacidade, nome e tipo das propriedades no constructor
// isso resume um pouco a sintaxe das nossas classes
class ParameterPropertieClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    returnPriceCar() {
        return `O preço do carro é R$${this.price}`;
    }
}
const car = new ParameterPropertieClass("Lancer", 190000);
console.log(car.returnPriceCar());
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// class expressions
// class expressions é um recurso para criar uma classe anônima
// Podemos tambem utilizar generics junto deste recurso
// Vamos encapsular a classe em uma variável
const myClassExpression = class {
    constructor(name) {
        this.name = name;
    }
};
const classExpression = new myClassExpression("Allan");
console.log(classExpression);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Abstract class
// Abstract class é um recurso para servir como molde de outra classe
// Todos os métodos dela devem ser implementados nas classes que as herdam
// E também não podemos instanciar objetos a partir dessa classe
// Podemos comparar uma classe abstrata á uma interface
// ambas são o molde do que será implementado na classe que a herdar
class MyAbstractClass {
}
class ExampleClass extends MyAbstractClass {
    methodAbstract(name) {
        return `Hi, my name is ${name}`;
    }
    showMessage(name) {
        return this.methodAbstract(name);
    }
}
const exampleClass = new ExampleClass();
console.log(exampleClass.showMessage("Allan"));
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Relações entre classes
// Podemos criar um objeto com base em outra classe
// Quando as classes são idênticas o TS não reclama sobre esta ação
// Precisamos que as duas sejam exatamente iguais
class Dog {
}
class Cat {
}
// doguinho receberá uma instância de cat.
// o conteudo interno será verificado
// se for tudo identico não haverá erros
const doguinho = new Cat();
console.log(doguinho);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
