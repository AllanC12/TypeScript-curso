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
