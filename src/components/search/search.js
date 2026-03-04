import Input from '../input/input'
import { styled } from 'styled-components'
import { useState } from 'react'
import { books } from './dataSearch'

const SearchContainer = styled.section`
  background-image: liner-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
`
const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const Subtitle = styled.h3`
  font-size: 16px;
  text-align: center;
  width: 100%;
`

function Search() {
  const [booksSearch, setBookSearch] = useState([])

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={event => {
          const textInput = event.target.value
          const resultSearch = books.filter(book => book.name.includes(textInput))
          setBookSearch(resultSearch)
        }}
      />
      {booksSearch.map(book => (
        <div>
          <p>{book.name}</p>
          <img src={book.src} alt={book.name} />
        </div>
      ))}
    </SearchContainer>
  )
}

export default Search;
