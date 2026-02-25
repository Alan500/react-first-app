import profile from '../../../images/perfil.svg'
import shop from '../../../images/sacola.svg'
import styled from 'styled-components'

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
`
const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`


const icons = [profile, shop]

function IconsHeader() {
  return (
    <IconsContainer>
      {icons.map((icon) => (
        <Icon><img src={icon} alt='icon'></img></Icon>
      ))}
    </IconsContainer>
  )
}

export default IconsHeader;
