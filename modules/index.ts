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

