import styled from "styled-components";
import { theme } from "../../theme/theme";
import arrowCateg from '../../assets/setaCategs.svg'

const LabelStyled = styled.label`
  display: block;
  font-size: 1.8rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  margin-bottom: .5rem;
`

const SelectStyled = styled.select`
  display: block;
  width: 100%;
  background: url(${arrowCateg}) no-repeat 98% 60%;
  font-size: 1.6rem;
  background-color: ${theme.colors.color02};
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
  label?: string;
  id: string;
  SelectedLabel?: string | null;
  options: Array<any> | null;
  // setValue: (value:string | Array<string>) => void;
  setValue: any
  isValueArray?: boolean
}

const Select = ({label,id,SelectedLabel,options, setValue,isValueArray}:SelectProps) => {
 
  return (
    <div>
      {label && <LabelStyled htmlFor={id}>{label}</LabelStyled>}
      <SelectStyled
        id={id}
        defaultValue={'DEFAULT'} 
        onChange={isValueArray?
        ({target}) => setValue((prev:any) => {
          const exist = prev.some((item:string) => item === target.value)
          const items = exist ? [...prev] : [...prev,target.value]
          return items
        })
          :
        ({target}) => setValue(target.value)}
      >
        {SelectedLabel && <option value='DEFAULT' disabled>{SelectedLabel}</option>}
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
    </div>
  )
}

export default Select