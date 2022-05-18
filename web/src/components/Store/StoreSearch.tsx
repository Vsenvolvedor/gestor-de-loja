import styled from "styled-components"
import { useForm } from "../../Hooks/useForm"
import { theme } from "../../theme/theme"

const ContainerFlex = styled.div`
  display: flex;
  padding: 0 6rem;
`

const ButtonStyle = styled.button`
    display: block;
    background-color: ${theme.colors.color04};
    font-size: 1.6rem;
    font-family: ${theme.fontFamily.first};
    color: ${theme.colors.color02};
    text-transform: uppercase;
    border-top-right-radius: .6rem;
    border-bottom-right-radius: .6rem;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1);
    padding: 1rem 3rem;
    cursor: pointer;
    transition: .3s;
    &:hover {
      opacity: .8;
      box-shadow: 2px 2px 4px rgba(0,0,0,.2);
    }
    &:disabled {
      opacity: .5;
    }
  `

const SearchInput = styled.input`
  font-size: 1.6rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  background-color: ${theme.colors.color02};
  box-shadow: 1px 1px 4px rgba(0,0,0,.1);
  border: 1px solid transparent;
  box-shadow: -1px 1px 2px rgba(0,0,0,.1);
  width: 100%;
  padding: 1rem 3rem;
  border-top-left-radius: .6rem;
  border-bottom-left-radius: .6rem;
  transition: .2s;
  &:hover,
  &:focus {
    background-color: ${theme.colors.color01};
    border: 1px solid ${theme.colors.color05};
    box-shadow: 1px 1px 4px rgba(0,0,0,.1);
  }
`


const StoreSearch = () => {


  return (
    <ContainerFlex>
      <SearchInput 
        type='search' 
        placeholder='Busque um produto pelo nome' 
        
      />
      <ButtonStyle>
        Buscar
      </ButtonStyle>
    </ContainerFlex>
  )
}

export default StoreSearch