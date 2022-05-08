import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main/Main'
import MainCreate from './Main/MainCreate'
import MainLogin from './Main/MainLogin'

const Home = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<MainLogin/>} />
        <Route path='/criar' element={<MainCreate />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default Home