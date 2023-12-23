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
  size
  constructor (name: string ){
    this.name = name
    this.size = 23
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

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// Métodos
// Métodos são como funções das classes
// Podemos criá-los junto de classes e os objetos podem utilizá-los
// É uma maneira de adicionar funcionalidades as classes

class Character {
  name
  constructor(name: string){
    this.name = name
  }

  greeting () {
    console.log(`Hi, I am the ${this.name}`)
  }
}

const Doctor = new Character("Doctor")

console.log(Doctor)

Doctor.greeting()

// ---------------------------------------------------------------------------------------------------------------------------------------------------


// O uso da palavra this 
// A palavra reservada this serve para nos referirmos ao objeto em si
// Ou seja conseguimos acessar suas propriedades
// Esta funcionaliodade se comporta da mesma forma que em Javascript

class Truck {
   name
   hp
   constructor(name: string,hp: number){
     this.name = name
     this.hp = hp
   }

    showDetails () {
     console.log(`Marca ${this.name} contendo HP: ${this.hp}`)
   }
}

const truck = new Truck("volvo",500)

console.table(truck)

truck.showDetails()

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Utilizando getters
// Os getters são uma forma de retornar propriedades do objeto
// Porém podemoes modificá-las neste retorno, isso é muito interessante
// Ou seja, é um método pra ler propriedades
// Os getters precisam obrigatoriamente retornar valores e os chamamamos como se fossem propriedades
// Ou seja, não usamos os parentes convencionais como nas funções ()

class HandleNumbers {
  initial
  second
  constructor(initial: number,second: number){
    this.initial = initial
    this.second = second

  }

  get sumNumbers(): number {
    return this.initial + this.second
  }
}


const manipulateNumbers = new HandleNumbers(2,4)

console.log(manipulateNumbers.sumNumbers)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Utilizando setters
// Os getters leem propriedades , os setters as modificam/atribuem
// Logo podemos fazer validações antes de inserir uma propriedade
// Os setters tambem funcionam como métodos
// Note que a sintaxe para chamar os setters e passar os valores pros parâmetros é feito através de atribuição

class Coords {

  x!: number
  y!: number

  set fillX(x: number){
    if(x === 0) return

    this.x = x
  }
  set fillY(y: number){
    if(y === 0) return

    this.y = y
  }

  get showCoords(): string {
    return `Coord X: ${this.x} 
Coord Y: ${this.y}`
  }

}

const coords = new Coords()

coords.fillX = 21312
coords.fillY = 11231

console.log(coords.showCoords)



