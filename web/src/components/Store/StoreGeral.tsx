import React from 'react'
import styled from 'styled-components'
import { PRODUCT_DATA } from '../../api/store'
import ProtectedRoute from '../../Helpers/ProtectedRoute'
import { getToken } from '../../Helpers/getToken'
import Loading from '../../Helpers/Loading'
import useFetch from '../../Hooks/useFetch'
import { theme } from '../../theme/theme'
import { UserContext } from '../../UserContext'
import { animeLeft, ManagerMenu } from '../Styles/ManagerStyle'
import SideMenu from './SideMenu'

const StoreGeralInfo = React.lazy(() => import('./StoreGeralInfo'))

const ManagerContent = styled.div`
  padding: 3rem;
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeLeft} .5s forwards;
`

const Title = styled.h1`
  font-size: 4.2rem;
  font-family: ${theme.fontFamily.second};
  font-weight: 400;
  color: ${theme.colors.color05};
  text-align: center;
  margin-bottom: 3rem;
`

const StoreGeral = () => {
  const userContext = React.useContext(UserContext)
  const {data, loading,request}:any = useFetch()
  
  React.useEffect(() => {
    async function getData() {
      const token = getToken()
      if(!token) return token
      const {url, options} = PRODUCT_DATA({
        search:'',
        page:'0',
        limit:'0'
      },token)
      await request(url,options)
      
    }
    getData()
  }, [])

  
  if(userContext?.loading || loading) return <Loading />
  if(userContext?.error) return <ProtectedRoute />
  if(!data) return null

  return (
    <ManagerMenu>
      <div>
        <SideMenu />
      </div>
      <ManagerContent>
        <Title>
          Visão Geral
        </Title>
        <React.Suspense fallback={<Loading />}>
          <StoreGeralInfo data={data} />  
        </React.Suspense>
      </ManagerContent>
    </ManagerMenu>
  )
}

export default StoreGeral