import './optionsHeader.css'

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante']

function OptionsHeader() {
  return (
    <ul className='options'>
      {textOptions.map((text) => (
        <li className='option'><p>{text}</p></li>
      ))}
    </ul>
  )
}

export default OptionsHeader;
