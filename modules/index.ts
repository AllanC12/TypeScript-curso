// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Introdução à módulos
// Os módulos são a forma que remos para importar código em arquivos
// Podemos exportar código com export default e importar usando o import
// Criaremos os arquivos com .ts mas importaremos como .js
// Isso nos da mais flexibilidade podendo separar as responsabilidades em arquivos
// Utilizaremos node.js para executar os arquivos com módulos

// importando arquivos
// Para começar vamos criar um arquivo simples e importar seu conteúdo
// Basta criar um arquivo .ts , desenvolver o código e exportar
// Depois no arquivo principal vamos importar o arquivo anterior com a extensão .js

import greetFunction from "./greet.js";

greetFunction()

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Importando variáveis
// Podemos exportar e importar variáveis tambem
// A sintaxe é um pouco mais simples, vamos utilizar o export
// No arquivo de importação vamos importar valores com destructuring

import {message} from "./greet.js";
console.log(message)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Múltiplas importações
// Podemos exportar múltiplas variáveis e funções
// Isso pode ser realizado no mesmo arquivo
// Para esta modalidade utilizamos export parar todos os dados
// E todos devem ser importados com destructuring

import { year,month,returnYear } from "./multiple.js";

console.log(year)
console.log(month)
console.log(returnYear())

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Alias para importações
// Ou seja , mudar o nome do que foi importado
// Podendo tornar este novo nome uma forma mais simples de chamar o recurso

import {changePhrase as messageChange} from "./multiple.js"

console.log(messageChange)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Importando tudo
// Podemos importar tudo que está em um arquivo usando apenas um símbolo
// Utilizamos o * para isso
// Este simbolo precisa de um alias
// Os dados virão em um objeto

import * as handleNumbers from './gettingAll.js'

console.log(handleNumbers)

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Importando tipos 
// Importar tipos ou interfaces também é possível
// Vamos exportar como se fossem variáveis
// E no arquivo que as recebe utilizamos destructuring
// Depois podemos implementar no projeto

import { Calculator } from "./multiple.js";

class ResolveOperation implements Calculator {
  sumNumbers(n1: number,n2: number): number {
    return n1 + n2;
  }
}

const sumMyNumbers = new ResolveOperation();

console.log(sumMyNumbers.sumNumbers(20,325));


// ---------------------------------------------------------------------------------------------------------------------------------------------------
