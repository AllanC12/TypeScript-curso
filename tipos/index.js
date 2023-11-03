"use strict";
//Arrays
const names = ["Allan", "João"];
names.push("Alfred");
// console.log(names)
const numbers = [1, 2, 4, 5];
numbers.push(243);
// console.log(numbers)
//OUTRA SINTAXE
const listItems = ["cola", "borracha", "sapato"];
listItems.push('mochila');
// console.log(listItems)
const numberItems = [1, 2, 4, 5, 6];
numberItems.push(989);
// console.log(numberItems)
//typo any
//evitar sempre que possível pois anula a tipagem do TS
const arr1 = [1, 'text', [], { name: 'Allan' }];
// console.log(arr1[3].name)
//tipos em parâmetros de funções
function sum(a, b) {
    // console.log(a + b)
}
sum(2, 2);
//tipos de retorno em funções
function greeting(name) {
    return 'olá ' + name;
}
// console.log(greeting("Allan"))
//validando funções anônimas
setTimeout(() => {
    const money = 1200;
    // haverá um erro pois parsefloat converte uma string para um float
    //parseFloat(money)
}, 2000);
//tipos de objetos
const coordinates = (coord) => {
    console.log('coordenadas X ' + coord.x);
    console.log('coordenadas Y ' + coord.y);
};
coordinates({ x: 34343, y: 3434908 });
