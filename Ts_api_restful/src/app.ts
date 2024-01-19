require("dotenv").config()

import express from "express"
import config from "config"
//rotas
import router from './router'

import connect from '../config/db'

const app = express()

// JSON middleware
app.use(express.json())

app.use('/api/',router)

const port = config.get<number>('port')

app.listen(port, async () => {
    await connect()
    console.log('Aplicação rodando na porta ' + port)
})

