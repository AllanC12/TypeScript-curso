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
