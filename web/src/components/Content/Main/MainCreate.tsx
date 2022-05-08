import Button from '../../Form/Button'
import Input from '../../Form/Input'
import MainFormTitle from './MainFormTitle'
import MainLoginSectionStyle from './MainLoginSectionStyle'

const MainCreate = () => {
  return (
    <main>
      <MainLoginSectionStyle>
        <MainFormTitle>
          Cadastre-se
        </MainFormTitle>
        <form>
          <Input 
            label='Nome da Loja'
            id='store'
          />
          <Input 
            label='Nome de Usuário'
            id='user'
          />
          <Input 
            label='Senha'
            type='password'
            id='password'
          />
          <Button marginConfig='1.5rem auto 0 auto' widthConfig='60%'>
            cadastrar
          </Button>
        </form>
      </MainLoginSectionStyle>
    </main>
  )
}

export default MainCreate