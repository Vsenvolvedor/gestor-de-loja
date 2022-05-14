import express from 'express'
import { createCateg } from '../controllers/createCateg'
import { deleteCateg } from '../controllers/deleteCateg'
import { getCategs } from '../controllers/getCategs'
import { createResponse } from '../helpers/createResponse'
import { isLogged } from '../middleware/isLogged'

const categData = async (req:any,res:any) => {
  try {
    const { ID } = res.locals.userData
    const response = await getCategs(ID)
  
    if(response) {
     res.status(response.status).json(response)
    } else throw new Error()
  } catch(err) {
    return createResponse(400, 'Não foi possivel carregar as categorias')
  }
}

const categCreate = async (req:any,res:any) => {
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
  
}

const categDelete = async (req:any,res:any) => {
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
 
}


const routes = express.Router()

routes.use('/', isLogged)

routes.route('/')
.get(categData)
.post(categCreate)

routes.route('/:name')
.delete(categDelete)


export default routes
