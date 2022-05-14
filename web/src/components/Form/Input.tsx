import styled from "styled-components";
import { theme } from "../../theme/theme";

const LabelStyled = styled.label`
  display: block;
  font-size: 1.8rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  margin-bottom: .5rem;
`

const InputStyled = styled.input`
  display: block;
  width: 100%;
  background-color: ${theme.colors.color02};
  font-size: 1.6rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  box-shadow: 1px 1px 2px rgba(0,0,0,.1);
  border: 1px solid ${theme.colors.color03};
  border-radius: 2px;
  padding: .5rem 1rem;
  margin-bottom: 1.5rem;
  transition: .2s;
  &:hover,
  &:focus {
    background-color: ${theme.colors.color01};
    box-shadow: 1px 1px 4px rgba(0,0,0,.1);
  }
`

const ErrorStyle = styled.p`
  font-size: 1.4rem;
  font-family: ${theme.fontFamily.second};
  color: #dd0000;
  margin-bottom: 1rem;
`

interface InputProps {
  label: string;
  id: string;
  type?: string;
  [props:string]:any
}

const Input = ({label,id,type,error,...props}:InputProps) => {
  return (
    <div>
      <LabelStyled htmlFor={id} >{label}</LabelStyled>
      <InputStyled
        type={type ? type : 'text'}
        id={id}
        name={id}
        {...props}
      />
      {error ? <ErrorStyle>{error}</ErrorStyle> : null}
    </div>
  )
}

export default Input