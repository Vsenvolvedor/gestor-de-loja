import styled from "styled-components";
import { theme } from "../../theme/theme";

const SelectStyled = styled.select`
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
  box-sizing: border-box;
  appearance: none;
  transition: .2s;
  &:hover,
  &:focus {
    background-color: ${theme.colors.color01};
    box-shadow: 1px 1px 4px rgba(0,0,0,.1);
  }
`
  
interface SelectProps {
  SelectedLabel?: string | null;
  options: Array<any> | null
  setValue: (value:string) => void
}

const Select = ({SelectedLabel,options, setValue}:SelectProps) => {
 
  return (
    <SelectStyled
      onChange={({target}) => setValue(target.value)}
    >
      {SelectedLabel && <option selected disabled>{SelectedLabel}</option>}
      {options && options.map((options,index) => {
        return (
          <option
            key={index}
            value={options.name}
          >
            {options.name}
          </option>
        )
      })}
    </SelectStyled>
  )
}

export default Select