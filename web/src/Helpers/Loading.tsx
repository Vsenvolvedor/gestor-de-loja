import styled, { keyframes } from "styled-components"
import { theme } from "../theme/theme"

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const loadingInfinite = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingRunning = styled.div`
  background-color: ${theme.colors.color02};
  border: 12px solid ${theme.colors.color03};
  border-top-color: ${theme.colors.color02};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation-name: ${loadingInfinite};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`


const Loading = () => {
  return (
    <LoadingDiv>
      <LoadingRunning></LoadingRunning>
    </LoadingDiv>
  )
}

export default Loading