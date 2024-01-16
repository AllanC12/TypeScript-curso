
// init express

import express from 'express'

const app = express()

app.get('/',(req,res) => {
    return res.send("Hello Express!!!")
})

//3 ---> Rota com POST ---> Permitindo JSON
app.use(express.json())

app.post('/api/product',(req,res) => {
    console.log(req.body)
    return res.send("Produto adicionado!")
})


// 4 ---> Rotas para todos os verbos
app.all('/api/product/check',(req,res) => {
   if(req.method === 'POST'){
     return res.send("Dados de produto enviado com sucesso!")
   }else if(req.method === 'GET'){
     return res.send('Dados de produto obtido com sucesso!')
   }else{
     return res.send('Não podemos realizar esta operação :(')
   }
})


app.listen(3000, () => {
    console.log("Aplicação TS + Express funcionando")
})