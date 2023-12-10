"use strict";
// 1 - Interface como tipo em parâmetro de função
// Essa abordagem é a mais utilizada para tiparmos objetos em parametros de funções
// isso evita repetição de código
const detailsProduct = (product) => {
    console.log(`Nome do produto: ${product.name}\nPreço do produto: ${product.price}`);
};
const computer = {
    name: "Acer Aspire 5",
    price: 3500
};
const registerUser = (user) => {
    const date = new Date();
    const year = date.getFullYear();
    if (user.hasPermissions) {
        return "Usuário com permissões";
    }
    else if (user.age) {
        return `Usuário nascido em ${year - user.age}`;
    }
};
const userOne = {
    hasPermissions: false,
    age: 23
};
const verifyUser = (userCurrent) => {
    if (userCurrent.isAdmin) {
        console.log('Usuário com credenciais');
    }
    console.log("Seja bem vindo " + userCurrent.name);
};
const userCurrent = {
    isAdmin: true,
    name: "Allan"
};
verifyUser(userCurrent);
const coord = {
    x: 25230
};
coord.y = 12341;
const allan = {
    name: "Allan",
    age: 23
};
const homelander = {
    name: "Homelander",
    age: 45,
    superpowers: ["Raios laser", "super força"]
};
const deadpool = {
    name: "deadpool",
    hability: "Fator de cura"
};
// console.log(deadpool)
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ReadOnlyArray
// O ReadOnlyArray é um tipo que deixa os itens como readonly
// Podemos aplicar um tipo para os itens do array, alem desta propriedade especial
// A modificação dos itens pode ser feita através do método, mas não podemos aumentar o array por exemplo
const fruitArray = ['mamão', 'Maçã', 'banana'];
// Não é permitido nenhuma alteração por atribuição com o sinal de =
// fruitArray[3] = "uva"
// mas conseguimos fazer alterações usando métodos para percorrê-lo
fruitArray.forEach((item) => {
    console.log("fruta: " + item);
});
const arrayNumbers = [1, 2, 3, 4, 5];
const dataUser = ["Allan", 23];
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Tuplas com readonly
// Podemos criar tuplas com a propriedade de readonly 
// é um tipo de dado super restrito pois limita quantos itens teremos, qual o tipo de cada um e também não são modificáveis
const showNumbers = (numbers) => {
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
};
showNumbers([1, 2, 3]);
