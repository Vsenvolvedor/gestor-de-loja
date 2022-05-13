import express from 'express'
import { createCateg } from '../controllers/createCateg'
import { createProduct } from '../controllers/createProduct'
import { deleteCateg } from '../controllers/deleteCateg'
import { deleteProduct } from '../controllers/deleteProduct'
import { getCategs } from '../controllers/getCategs'
import { getProductData } from '../controllers/getProductData'
import { getSingleProduct } from '../controllers/getSingleProduct'
import { updateProduct } from '../controllers/updateProduct'
import { createResponse } from '../helpers/createResponse'
import { isLogged } from '../middleware/isLogged'

export const routes = express.Router()

routes.use('/api/product', isLogged)

routes.get('/api/product', async (req,res) => {
  try {
    const {search, limit, page} = req.query
    const { ID } = res.locals.userData
  
    const response = await getProductData({
      id: Number(ID),
      search: search?.toString(),
      limit: Number(limit),
      page: Number(page)
    })

    if(response) {
      res.status(response.status).json(response)
    } else throw new Error('Nenhum produto foi encontrado.')
  } catch(err:any) {
    const response = createResponse(404, err.message)
    res.status(response.status).json(response)
  }
  
})

routes.get('/api/product/:id', async (req,res) => {
  try {
    const {ID:ownerID} = res.locals.userData
    const { id } = req.params
    const response = await getSingleProduct(Number(id), Number(ownerID))
    
    if(response) {
      res.status(response.status).json(response)
    } else throw new Error('Nenhum produto foi encontrado.')
  } catch(err:any) {
    const response = createResponse(404, err.message)
    res.status(response.status).json(response)
  }
  
})

routes.post('/api/product', async (req,res) => {
  try {
    const { ID, storename } = res.locals.userData
    const { name, value, qtd, categ, image } = req.body
    
    const response = await createProduct({
      ownerID: Number(ID),
      storename,
      name,
      value: Number(value),
      qtd:Number(qtd),
      categ,
      image
    })
    if(response) {
      res.status(response.status).json(response)
    } else throw new Error()
  } catch(err:any) {
    const response = createResponse(400, 'Não foi possivel criar o produto.')
    res.status(response.status).json(response)
  }
})

routes.delete('/api/product/:productId', async (req,res) => {
  const { ID } = res.locals.userData
  const { productId } = req.params

  const response = await deleteProduct(Number(ID), Number(productId))

  res.status(response.status).json(response)
})

routes.put('/api/product', async (req,res) => {
  try {
    const { ID:ownerID } = res.locals.userData
    const { ID , name, value, qtd, categ, image } = req.body

    const response = await updateProduct({
      ID,
      ownerID,
      name: name ? name : false,
      value: value ? value : false,
      quantity: qtd ? qtd : false,
      categ: categ ? categ : false,
      image: image ? image : false
    })
    if(response) {
      res.status(200).send('Dados atualizados')
    } else throw new Error()
  } catch(err) {
    res.status(404).send('Não foi possivel atualizar os dados')
  }
})

routes.get('/api/product/categ', async (req,res) => {
  try {
    const { ID } = res.locals.userData

    const response = await getCategs(ID)
  
    if(response) {
     res.status(response.status).json(response)
    } else throw new Error()
  } catch(err) {
    return createResponse(400, 'Não foi possivel carregar as categorias')
  }
  
})

routes.post('/api/product/categ', async (req,res) => {
  try {
    const { ID, storename } = res.locals.userData
    const { name } = req.body
  
    const response = await createCateg(ID, storename, name)

    if(response) {
      res.status(response.status).json(response)
    } else throw new Error()
  } catch(err) {
    return createResponse(400, 'Não foi possivel criar a categoria')
  }
  
})

routes.delete('/api/product/categ/:name', async (req,res) => {
  try {
    const { ID } = res.locals.userData
    const { name } = req.params
  
    const response = await deleteCateg(ID, name)
    if(response) {
      res.status(response.status).json(response)
    } else throw new Error()
  } catch(err) {
    res.status(400).send('Categoria não encontrada')
  }
 
})