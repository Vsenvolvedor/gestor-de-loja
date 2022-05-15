import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { UserContext } from "../../UserContext"
import ConfigIcon from "../svgs/ConfigIcon"
import GraficoIcon from "../svgs/GraficoIcon"
import SacolaIcon from "../svgs/SacolaIcon"
import SairIcon from "../svgs/SairIcon"

const MenuNav = styled.nav`
  background-color: ${theme.colors.color01};
  border-right: 4px solid ${theme.colors.color06};
  padding: 3rem 0;
  height: 100vh;
`

const MenuUl = styled.ul`

`

const MenuLi = styled.li`
  transition: .2s;

  & a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    font-family: ${theme.fontFamily.second};
    color: ${theme.colors.color05};
    padding: 1.5rem 3rem;
  }

  & a.active {
    background-color: ${theme.colors.color02};
  }

  &:hover {
    opacity: .8;
  }
`

const SideMenu = () => {
  const userContext = React.useContext(UserContext)

  function handleClick() {
    userContext?.logoutUser()
  }
  
  return (
    <MenuNav>
      <MenuUl>
        <MenuLi>
          <NavLink to='/store/geral' end>
            Visão Geral
            <GraficoIcon />
          </NavLink> 
        </MenuLi>
        <MenuLi>
          <NavLink to='/store/produtos'>
            Produtos
            <SacolaIcon />
          </NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to='/store/gestor'>
            Configurações
            <ConfigIcon />
          </NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink onClick={handleClick} to='/'>
            Sair
            <SairIcon />
          </NavLink>
        </MenuLi>
      </MenuUl>
    </MenuNav>
  )
}

export default SideMenu