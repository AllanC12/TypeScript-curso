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
console.log(showMessage(3));
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
// const price = {
//   price: 1231
// }
console.log(showProduct(car));
// console.log(showProduct(price))