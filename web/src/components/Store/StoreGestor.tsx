import React from 'react'
import styled, { keyframes } from 'styled-components'
import { CATEG_DATA } from '../../api/categ'
import AlertError from '../../Helpers/AlertError'
import { getToken } from '../../Helpers/getToken'
import Loading from '../../Helpers/Loading'
import useFetch from '../../Hooks/useFetch'
import { UserContext } from '../../UserContext'
import SideMenu from './SideMenu'
import StoreGestorCategsAdd from './StoreGestorCategsAdd'
import StoreGestorCategsRemove from './StoreGestorCategsRemove'
import StoreGestorProducts from './StoreGestorProducts'

const animeLeft = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`

const ManagerMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`
const ManagerProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: .5fr auto;
  gap: 3rem;
  justify-content: center;
  padding: 3rem;
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeLeft} .5s forwards;
`

const StoreGestor = () => {
  const userContext = React.useContext(UserContext)
  const {data, loading, request} = useFetch()
 
  async function getCategs() {
    const token = getToken()
    if(!token) return false
    const { url, options} = CATEG_DATA(token)
    await request(url, options)
  }

  React.useEffect(() => { 
    getCategs()
  }, [])

  if(userContext?.loading || loading) return <Loading />
  if(userContext?.error) return <AlertError error={userContext?.error} />
  return (
    <ManagerMenu>
      <div>
        <SideMenu />
      </div>
      <ManagerProducts>
        <StoreGestorProducts categs={data && data.message}  />
        <StoreGestorCategsAdd update={getCategs} />
        <StoreGestorCategsRemove categs={data && data.message} update={getCategs} />
      </ManagerProducts>
    </ManagerMenu>
  )
}

export default StoreGestor