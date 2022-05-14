import express from 'express'
import cors from 'cors' 
import store  from './routes/store' 
import user from './routes/user' 
import categ from './routes/categ' 
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/product', store)
app.use('/api/user', user)
app.use('/api/categ', categ)

app.listen(5555, () => {
  console.log('RODANDO')
  console.log('http://localhost:5555')
})