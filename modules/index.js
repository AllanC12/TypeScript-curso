"use strict";
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Introdução à módulos
// Os módulos são a forma que remos para importar código em arquivos
// Podemos exportar código com export default e importar usando o import
// Criaremos os arquivos com .ts mas importaremos como .js
// Isso nos da mais flexibilidade podendo separar as responsabilidades em arquivos
// Utilizaremos node.js para executar os arquivos com módulos
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importando arquivos
// Para começar vamos criar um arquivo simples e importar seu conteúdo
// Basta criar um arquivo .ts , desenvolver o código e exportar
// Depois no arquivo principal vamos importar o arquivo anterior com a extensão .js
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Importando variáveis
// Podemos exportar e importar variáveis tambem
// A sintaxe é um pouco mais simples, vamos utilizar o export
// No arquivo de importação vamos importar valores com destructuring
const greet_js_2 = require("./greet.js");
console.log(greet_js_2.message);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Múltiplas importações
// Podemos exportar múltiplas variáveis e funções
// Isso pode ser realizado no mesmo arquivo
// Para esta modalidade utilizamos export parar todos os dados
// E todos devem ser importados com destructuring
const multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.year);
console.log(multiple_js_1.month);
console.log((0, multiple_js_1.returnYear)());
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Alias para importações
// Ou seja , mudar o nome do que foi importado
// Podendo tornar este novo nome uma forma mais simples de chamar o recurso
const multiple_js_2 = require("./multiple.js");
console.log(multiple_js_2.changePhrase);
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Importando tudo
// Podemos importar tudo que está em um arquivo usando apenas um símbolo
// Utilizamos o * para isso
// Este simbolo precisa de um alias
// Os dados virão em um objeto
const handleNumbers = __importStar(require("./gettingAll.js"));
console.log(handleNumbers);
class ResolveOperation {
    sumNumbers(n1, n2) {
        return n1 + n2;
    }
}
const sumMyNumbers = new ResolveOperation();
console.log(sumMyNumbers.sumNumbers(20, 325));
// ---------------------------------------------------------------------------------------------------------------------------------------------------
