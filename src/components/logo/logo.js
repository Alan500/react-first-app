import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImg = styled.img`
  margin: 20px 10px 20px 0;
`


function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt='logo' />
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  )
}

export default Logo;
