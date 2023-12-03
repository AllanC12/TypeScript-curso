"use strict";
// 1 - void - tipo especificado em funções que não possuem nenhum tipo de retorno
//um exemplo claro de uma função que não possui um tipo de retorno definido seria uma em que
// a finalidade é a manipulação de DOM. As unicas alterações são em elementos html e nao ha um retorno especifico
function showModal() {
    console.log('Esta função não possui um tipo de retorno definido');
}
showModal();
// 2 - callback como argumento
// existe a possibilidade de passarmos callbacks para as nossas funções e definirmos tambem os tipos de retorno para essas funções
// função passada como argumento
function greeting(name) {
    return `Olá ${name}`;
}
//função que recebe callback
function preGreeting(callFunction, userName) {
    return callFunction(userName);
}
console.log(preGreeting(greeting, "Allan"));
// 3 - Generic functions
// O generic é uma forma de aplicarmos tipagem a um dado que não sabemos exatamente como vai chegar
// por convenção são usadas as letras T e U para demonstrarem o uso de um generic
// na função abaixo, entende-se que será retornado uma array. mas não sabemos de que exatamente esse array será constituido. 
// por isso usamos o generic para deixatmos os tipos de dados desse array mais flexível
function showFirstElement(arr) {
    return arr[0];
}
console.log(showFirstElement([1, 2, 3]));
//Existe a possibilidade tambem da junção de itens que são do tipo generics e de union types com generics
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const mergedObject = mergeObjects({ name: "Allan" }, { job: "Programmer" });
console.log(mergedObject);
// 4 -  constraints
// em generic functions podemos tambem aplicar o conceito de constraints , o que significa limitar o escopo dos tipos aceitos nos generics
//OBS: note que nesta função há a declaração de apenas um generic aceitando dois tipos e a passagem de dois argumentos aceitando apenas um generic
//isso nos limita passar os dois argumentos com o mesmo tipo. Isso seria diferente caso tivéssemos dois generics sendo declarados
const biggestNumber = (a, b) => {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
};
console.log(biggestNumber(4, 9));
console.log(biggestNumber(3, 30983223));
// 5 - Especificar os tipos de parâmetros dos generics
// note que com apenas a definição de apenas um generic em dois argumentos , os tipos destes argumentos precisam ser iguais
// mas podemos especificar os tipos destes generics na hora da chamada da função
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
// 6 - revisão de parametros opcionais
function resolveEquation(num1, num2, num3) {
    if (num3) {
        return (num1 + num2) / num3;
    }
    return num1 + num2;
}
console.log(resolveEquation(23, 23, 2));
// 7 - parâmetros com valores default
function sumNumbers(numb1, numb2 = 25) {
    return numb1 + numb2;
}
console.log(sumNumbers(34, 12));
