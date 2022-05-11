import express from 'express'

export const routes = express.Router()

routes.post('/product/create', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.get('/product/data', (req,res) => {
  const { username, password } = req.body
 
  res.status(200).send('usuario infos')
})

routes.delete('/product/delete', (req,res) => {
  const { id } = req.body
 
  res.status(200).send('usuario infos')
})

routes.put('/product/update', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.post('/product/search', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.post('/newcateg', (req,res) => {
  const { categ } = req.body
 
  res.status(200).send('usuario infos')
})

routes.get('/categ',(req,res) => {
  const { categ } = req.body
 
  res.status(200).send('lista de categoria')
})

routes.delete('/deletecateg', (req,res) => {
  const { categ } = req.body
 
  res.status(200).send('usuario infos')
})