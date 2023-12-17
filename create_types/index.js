"use strict";
// Há a possibilidade de gerar novos tipos em Typescript , ja vimos isso com generics.
// Porém existem outros operadores que visam facilitar nossa vida neste assunto
// A ideia deste recurso é deixar a manutenção do projeto mais simples
// Ou seja, gastar mais tempo na estruturação dos tipos e menos na busca de possíveis bugs depois
// Revisão de generics
// Utilizamos generics quando uma função pode aceitar mais de um tipo
// É uma prática mais interessante que o any, que teria um efeito parecido
//como meu argumento recebe o generic e a função tem um retorno de string, independente do argumento que eu passe para a função,
// o generic fará essa conversão para o tipo retornado pela função
function showMessage(arg) {
    return `O argumento é: ${arg}`;
}
// console.log(showMessage(3))
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Constraints em Generics
// As constraints nos ajudam a limitar os tipos aceitos
// Como em genenric podemos ter tipos livres, elas vão filtrar os tipos aceitos
// Adicionando organização quando queremos aproveitar a liberdade dos generics
//nesse cenário, o objeto a ser passado na função, precisa obrigatoriamente possuir uma proprieade name
const showProduct = (obj) => {
    return `O nome do produto é: ${obj.name}`;
};
const car = {
    name: "Lancer"
};
const flash = {
    name: "Barry Alen",
    age: 29,
    weight: 90,
    // hability: "Super velocidade"
};
const Allan = {
    name: "Allan",
    age: 23,
    weight: 85
};
function showSomeKey(obj, key) {
    return `A chave de ${key.toString()} é ${obj[key]}`;
}
const server = {
    port: 12312,
    ip: '127.0.0.1'
};
function returnKeyOfObject(obj, key) {
    return `${obj[key]}`;
}
const person = {
    name: "Allan",
    age: 23,
    hasDriveLicense: false
};
// console.log(returnKeyOfObject(person, 'name'))
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Typeof type operator
// Com o typeof type operator podemos criar um novo tipo
// Este tipo será baseado no tipo de algum dado
// Ou seja , é interessabte para quando queremos criar uma variável com o mesmo tipo da outra por exemplo
const userName = "Aurélio";
const userRegistered = "Adilson";
// const userRegistered2: typeof userName = "Adilson"
console.log(userRegistered);
const earth = {
    diameter: 12000,
    description: 'Planeta composto por mais de 70% de água'
};
const showDetails = (sizePlanet) => {
    return `O  diâmetro do planeta Terra é ${sizePlanet} km`;
};
console.log(showDetails(earth.diameter));
