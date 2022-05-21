import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme/theme'
import Photo from '../svgs/Photo'

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
  position: relative;
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

const LocalImage = styled.img`
  border: 2px solid ${theme.colors.color05};
  border-radius: .4rem;
  box-shadow: 2px 2px 4px rgba(0,0,0,.1);
  margin: 0 auto;
  width: 50px;
  height: 50px;
`

interface ImageInputProps {
  setImage: (value:string) => void
}

const ImageInput = ({setImage}:ImageInputProps) => {
  const imageRef = React.useRef<any>()
  const [hasImage, setHasImage] = React.useState<boolean>(false)
  const [localImage, setLocalImage] = React.useState<string>('')

  function handleImage() {
    const file = imageRef.current.files[0]
    const url = URL.createObjectURL(file)
    const canvas = document.createElement('canvas')
    canvas.width = 180
    canvas.height = 120
    const ctx =canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    const image = new Image()
    image.src = url
    image.onload = () => {
      ctx?.clearRect(0,0,canvas.width,canvas.height)
      ctx?.drawImage(image, 0, 0, 200, 120)
      const dataURL = canvas.toDataURL('image/png',.5)
      setLocalImage(dataURL)
      setImage(dataURL)
      setHasImage(true)
    }
  }

  function resetImage() {
    setImage('')
    setLocalImage('')
    setHasImage(false)
    imageRef.current.files[0] = ''
    imageRef.current.value = ''
  }

  return (
    <ImageWrapperStyle>
      {hasImage ? (
        <ImageLabelStyle onClick={resetImage} >
          <LocalImage src={localImage}/>
          <ImagePStyle>Imagem selecionada</ImagePStyle>
        </ImageLabelStyle>
      ):(
        <>
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
        </>
      )}
      
    </ImageWrapperStyle>
  
  )
}

export default ImageInput