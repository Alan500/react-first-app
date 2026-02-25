import './appHeader.css'
import Logo from '../../logo/logo'
import OptionsHeader from '../optionsHeader/optionsHeader'
import IconsHeader from '../iconsHeader/iconsHeader';


function AppHeader() {
  return (
    <header className='App-header'>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </header>
  )
}

export default AppHeader;
