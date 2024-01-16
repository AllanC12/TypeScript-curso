
// init express

import express,{Request,Response} from 'express'

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

// 5 ---> Interfaces do express
app.get('/api/interfaces',(req:Request,res:Response) => {
  return res.send("Utilizando as interfaces")
})

// 6 ---> Enviando JSON
app.post('/api/json',(req:Request,res:Response) => {
    return res.send({
        name: "shirt",
        price: 30.00,
        color: "Black",
        sizes: ["P","M","G"]
    })
})

// 7 ---> Router parameters

app.get('/api/product/:id',(req:Request,res:Response) => {
    console.log(req.params)

    const id = req.params.id

    if(id === '1'){
        const product = {
            id: 1,
            name: 'Jaqueta',
            price: 134.99
        }
      return res.json(product)
    }else{
      return res.send('Produto não encontrado')
    }
})

// 8 ---> Rotas mais complexas

app.get('/api/product/:productId/review/:reviewId',(req:Request,res:Response) => {
    const productId = req.params.productId
    const reviewId = req.params.reviewId

    return res.send(`Estamos acessando a review ${reviewId} do produto ${productId}`)
})

// 9 ---> Router handler

 const getUser = (req: Request, res: Response) => {
   console.log('Resgatando usuário com id: ' + req.params.id)
   return res.send("Usuário encontrado no sistema")
 }

 app.get('/api/user/:id',getUser)



app.listen(3000, () => {
    console.log("Aplicação TS + Express funcionando")
})