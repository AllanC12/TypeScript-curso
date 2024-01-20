require("dotenv").config()

import express from "express"
import config from "config"
//rotas
import router from './router'

import connect from '../config/db'

//logger
import Logger from '../config/logger'

//middlewares
import morganMiddleware from "./middleware/morganMiddleware"

const app = express()

// JSON middleware
app.use(express.json())

app.use(morganMiddleware)

app.use('/api/',router)


const port = config.get<number>('port')

app.listen(port, async () => {
    await connect()
    Logger.info('Aplicação rodando na porta ' + port)
})

