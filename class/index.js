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
console.log(Allan);
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
console.log(John);
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
console.log(lancer);
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
console.log(trator);
class DoctorMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const TheMoment = new DoctorMachine("The Moment", 1);
console.log(TheMoment);
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
        console.log(`Hi, I am the ${this.name}`);
    }
}
const Doctor = new Character("Doctor");
console.log(Doctor);
Doctor.greeting();
