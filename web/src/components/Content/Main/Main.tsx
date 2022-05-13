import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme/theme"
import Button from "../../Form/Button"
import MainSectionAbout from "./MainSectionAbout"
import MainSectionControl from "./MainSectionControl"


const Main = () => {
  return (
    <main>
      <MainSectionAbout/>
      <MainSectionControl />
      <Link to='/criar'>
        <Button marginConfig="3rem auto 0 auto">
          cadastrar-se
        </Button>
      </Link>
    </main>
  )
}

export default Main