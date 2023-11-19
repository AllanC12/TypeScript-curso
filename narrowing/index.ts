//Narrowing --> o conceito se resume em verficar os tipos dos dados recebidos para exibir a resposta adequada para cada tipo de retorno

// typeof type guard --> neste método usamos o typeof para verificar e tratar os tipos de respostas

function sumNumber(a: number | string, b: number | string) {
    if(typeof a === 'number' && typeof b === 'number'){
        console.log(a + b)
    }else if( typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b))
    }else {
        console.log('Impossível realizar a soma')
    }
}

sumNumber(2,2)
sumNumber('12','123')
sumNumber('23123',12312)