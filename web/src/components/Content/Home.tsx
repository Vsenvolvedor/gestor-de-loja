import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import Main from './Main/Main'
import MainCreate from './Main/MainCreate'
import MainLogin from './Main/MainLogin'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto calc(85% - 110px) 110px;
`


const Home = () => {
  return (
    <Wrapper>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<MainLogin/>} />
        <Route path='/criar' element={<MainCreate />} />
      </Routes>
      <Footer/>
    </Wrapper>
  )
}

export default Home