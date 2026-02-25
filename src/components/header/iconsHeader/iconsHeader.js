import './iconsHeader.css'
import profile from '../../../images/perfil.svg'
import shop from '../../../images/sacola.svg'

const icons = [profile, shop]

function IconsHeader() {
  return (
    <ul className='icons'>
      {icons.map((icon) => (
        <li className='icon'><img src={icon}></img></li>
      ))}
    </ul>
  )
}

export default IconsHeader;
