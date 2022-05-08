import express from 'express'
import { createUser } from '../controllers/createUser'

export const routes = express.Router()

routes.post('/user/create', async (req,res) => {
  const { storeName, username, password } = req.body

  await createUser({storeName,username,password})

  res.status(200).send('usuario criado')
})

routes.post('/user/login', (req,res) => {
  const { username, password } = req.body
 
  res.status(200).send('usuario logado')
})


routes.get('/user/data', (req,res) => {
  const { username, password } = req.body
 
  res.status(200).send('usuario logado')
})