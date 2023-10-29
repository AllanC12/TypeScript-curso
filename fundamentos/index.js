"use strict";
//1 - types
const x = 10;
//type number
//type string
const message = 'mensagem em typescript';
const messageUpper = message.toUpperCase();
let confirmMessage = false;
//2 - type inference e type annotation
//deixar o tipo da variável explícito é chamado de type annotation
let annotation = "mensagem por type annotation";
//deixar o tipo da variável subentendido é chamado de type inference
let inference = 'mensagem por inferencia';
console.log(inference + ' ola');
