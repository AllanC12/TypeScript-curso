// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Campos em classes
// Em TS podemos adicionar novos campos a uma classe  , ou seja , iniciar a classe com campos para os futuros dados dos objetos
// Que serão as propriedades dos objetos instanciados
// Estes campos podem ser tipados também
// Note que um campo sem valor inicial deve ser declarado com !

class User {
  name!: string
  age!: number
}

const Allan = new User()

Allan.name = "Allan"
Allan.age = 23

console.log(Allan)


// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Constructor

// Constructor é uma função que nos da a possibilidade de iniciar o objeto com valores nos seus campos
// Isso faz com que não precise de mais da !
// Provavelmente todos os campos serão preenchidos na hora de instanciar um objeto


class NewUser {
   name 
   age

   constructor(name: string, age: number) {
    this.name = name
    this.age = age

   }
}

const John = new NewUser("John Smith",35)

console.log(John)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// campo readonly
// Podemos iniciar o campo com valor e torná-lo readonly
// ou seja será um valor somente para consulta
// Não podemos alterar este valor ao longo do programa

class Car {
  name
  readonly wheels = 4

  constructor(name:string) {
    this.name = name
  }

}

const lancer = new Car("Lancer Evo X")

console.log(lancer)


// ---------------------------------------------------------------------------------------------------------------------------------------------------


// Herança e super

// Para gerar uma herança utilizamos a palavra reservada extends
// Depois vamos precisar passar as propriedades da classe pai para ela quando instanciarmos um objeto
// Isso será feito com a função super

class Machine {
  name
  constructor (name: string){
    this.name = name
  }
}

const trator = new Machine("Trator")

console.log(trator)

class DoctorMachine extends Machine {
  guns
  constructor(name: string,guns: number){
    super(name)
    this.guns = guns
  }
}

const TheMoment = new DoctorMachine("The Moment",1)

console.log(TheMoment)

