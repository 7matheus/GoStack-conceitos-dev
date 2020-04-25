import express from 'express'
import { helloWorld, createUser } from './routes'

const app = express()

app.get('/', helloWorld)
app.get('/criar-usuario', createUser)

app.listen(3333)