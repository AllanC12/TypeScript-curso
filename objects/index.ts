// 1 - Interface como tipo em parâmetro de função
// Essa abordagem é a mais utilizada para tiparmos objetos em parametros de funções
// isso evita repetição de código

interface Product {
    name: string
    price: number
}

const detailsProduct = (product: Product) => {
    console.log(`Nome do produto: ${product.name}\nPreço do produto: ${product.price}`)
}



const computer: Product = {
    name: "Acer Aspire 5",
    price:  3500
}

// detailsProduct(computer)

//Em interfaces podemos utilizar tambem o conceito de propriedades opcionais , seguindo a mesma ideia com o ?
// a idade do usuário neste cenário é opcional
interface UseriInitial {
   hasPermissions: boolean
   age?: number
}


const registerUser = (user: UseriInitial) => {
 const date = new Date()
 const year: number = date.getFullYear()
  if(user.hasPermissions){
    return "Usuário com permissões"
  }else if(user.age){
      return `Usuário nascido em ${year - user.age}`
  }

}


const userOne: UseriInitial = {
    hasPermissions: false,
    age: 23
}

// console.log(registerUser(user))


// readonly property
// Este conceito replica exatamente a mesma lógica das constantes do javascipt convencional
// uma propriedade com readonly não pode ser alterada, apenas lida

interface User {
  readonly isAdmin: boolean
  name: string
}

const verifyUser = (userCurrent: User): void => {
    if(userCurrent.isAdmin){
        console.log('Usuário com credenciais')
    }
    console.log("Seja bem vindo " + userCurrent.name)
}

const userCurrent: User = {
    isAdmin: true,
    name: "Allan"
}

verifyUser(userCurrent)
