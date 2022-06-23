import React from 'react'
import { ImageInputStyle, ImageLabelStyle, ImagePStyle, ImageWrapperStyle, LocalImage } from '../Styles/ImageInputStyles'
import Photo from '../svgs/Photo'

interface ImageInputProps {
  image: string;
  setImage: (value:string) => void;
}

const ImageInput = ({image,setImage}:ImageInputProps) => {
  const imageRef = React.useRef<any>();
  const [hasImage, setHasImage] = React.useState<boolean>(false);

  function handleImage() {
    const file = imageRef.current.files[0]
    const url = URL.createObjectURL(file)
    const canvas = document.createElement('canvas')
    canvas.width = 180
    canvas.height = 120
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0,0,canvas.width,canvas.height)
    const image = new Image()
    image.src = url
    image.onload = () => {
      ctx?.clearRect(0,0,canvas.width,canvas.height)
      ctx?.drawImage(image, 0, 0, 200, 120)
      const dataURL = canvas.toDataURL('image/png',.5)

      setImage(dataURL)
      setHasImage(true)
    }
  }

  function resetImage() {
    setImage('')
    setHasImage(false)
    imageRef.current.files[0] = ''
    imageRef.current.value = ''
  }

  return (
    <ImageWrapperStyle>
      {hasImage ? (
        <ImageLabelStyle onClick={resetImage} >
          <LocalImage src={image}/>
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