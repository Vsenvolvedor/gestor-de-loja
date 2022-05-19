import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme/theme'
import Photo from '../svgs/Photo'
import lojaimg from '../../assets/loja.jpg'

const ImageWrapperStyle = styled.div`
  background-color: ${theme.colors.color02};
  padding: 1rem;
  border-radius: .4rem;
  box-shadow: 2px 2px 4px rgba(0,0,0,.1);
`

const ImageLabelStyle = styled.label`
  display: block;
  margin: 0 auto;
  width: fit-content;
  cursor: pointer;
`

const ImageInputStyle = styled.input`
  display: none;
`

const ImagePStyle = styled.p`
  font-size: 1.6rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  margin-top: .5rem;
`

interface ImageInputProps {
  setImage: (value:string) => void
}

const ImageInput = ({setImage}:ImageInputProps) => {
  const imageRef = React.useRef()

  function handleImage() {
    const file = imageRef.current.files[0]
    const url = URL.createObjectURL(file)
    const canvas = document.createElement('canvas')
    canvas.width = 5595
    canvas.height = 3997
    const ctx =canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    const image = new Image()
    image.src = url
    image.onload = () => {
      ctx?.clearRect(0,0,canvas.width,canvas.height)
      ctx?.drawImage(image, 0, 0, 5595, 3997)
      const dataURL = canvas.toDataURL('image/png',.5)
      console.log(dataURL)
    }
  }

  return (
    <ImageWrapperStyle>
      <ImageLabelStyle htmlFor='imageInput'>
        <Photo />
        <ImagePStyle>Selecione uma imagem</ImagePStyle>
      </ImageLabelStyle>
      <ImageInputStyle 
        type='file'
        id='imageInput'
        onChange={handleImage}
        ref={imageRef}
      />
     
    </ImageWrapperStyle>
  
  )
}

export default ImageInput