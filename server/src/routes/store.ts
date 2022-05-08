import express from 'express'

export const routes = express.Router()

routes.get('/store/product/data', (req,res) => {
  const { username, password } = req.body
 
  res.status(200).send('usuario infos')
})

routes.post('/store/product/create', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.delete('/store/product/delete', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.put('/store/product/update', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.post('/store/product/search', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.post('/store/newcateg', (req,res) => {
  const { categ } = req.body
 
  res.status(200).send('usuario infos')
})

routes.get('/store/categ',(req,res) => {
  const { categ } = req.body
 
  res.status(200).send('lista de categoria')
})

routes.delete('/store/deletecateg', (req,res) => {
  const { categ } = req.body
 
  res.status(200).send('usuario infos')
})