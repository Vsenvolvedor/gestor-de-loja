import styled from "styled-components"
import { theme } from "../../theme/theme"

export const ImageWrapperStyle = styled.div`
  background-color: ${theme.colors.color02};
  padding: 1rem;
  border-radius: .4rem;
  box-shadow: 2px 2px 4px rgba(0,0,0,.1);
`

export const ImageLabelStyle = styled.label`
  display: block;
  margin: 0 auto;
  width: fit-content;
  cursor: pointer;
  position: relative;
`

export const ImageInputStyle = styled.input`
  display: none;
`

export const ImagePStyle = styled.p`
  font-size: 1.6rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  margin-top: .5rem;
`

export const LocalImage = styled.img`
  border: 2px solid ${theme.colors.color05};
  border-radius: .4rem;
  box-shadow: 2px 2px 4px rgba(0,0,0,.1);
  margin: 0 auto;
  width: 50px;
  height: 50px;
`