import Logo from '../../logo/logo'
import OptionsHeader from '../optionsHeader/optionsHeader'
import IconsHeader from '../iconsHeader/iconsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

function AppHeader() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  )
}

export default AppHeader;
