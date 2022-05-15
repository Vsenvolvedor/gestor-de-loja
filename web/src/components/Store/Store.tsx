import { Navigate, Route, Routes } from 'react-router-dom'
import { UserProvider } from '../../UserContext'
import Error404 from '../Error404'
import StoreGeral from './StoreGeral'
import StoreGestor from './StoreGestor'
import StoreProducts from './StoreProducts'

const Store = () => {
  return (
  <UserProvider>
    <Routes>
      <Route path="/" element={<Navigate to='/store/geral'/>} />
      <Route path="/geral" element={<StoreGeral/>} />
      <Route path="/produtos" element={<StoreProducts/>} />
      <Route path="/gestor" element={<StoreGestor/>} />
      <Route path="*" element={<Error404 />}/>
    </Routes>
  </UserProvider>

  )
}

export default Store