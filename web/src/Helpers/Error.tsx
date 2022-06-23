import { ErrorStyle } from "../components/Styles/ErrorStyle"

const Error = ({error}:{error:string}) => {
  return (
    <ErrorStyle>
      {error}
    </ErrorStyle>
  )
}

export default Error