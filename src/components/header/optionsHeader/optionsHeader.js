import styled from 'styled-components';

const OptionsContainer = styled.ul`
  display: flex;
`
const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante']

function OptionsHeader() {
  return (
    <OptionsContainer>
      {textOptions.map((text) => (
        <Option><p>{text}</p></Option>
      ))}
    </OptionsContainer>
  )
}

export default OptionsHeader;
