import React from 'react'
import styled, { keyframes } from 'styled-components'
import AlertError from '../../Helpers/AlertError'
import Loading from '../../Helpers/Loading'
import { UserContext } from '../../UserContext'
import SideMenu from './SideMenu'

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

const ManagerContent = styled.div`
  padding: 3rem;
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeLeft} .5s forwards;
`

const StoreGeral = () => {
  const userContext = React.useContext(UserContext)
  
  if(userContext?.loading) return <Loading />
  if(userContext?.error) return <AlertError error={userContext?.error} />

  return (
    <ManagerMenu>
      <div>
        <SideMenu />
      </div>
      <ManagerContent>
        adsadas
      </ManagerContent>
    </ManagerMenu>
  )
}

export default StoreGeral