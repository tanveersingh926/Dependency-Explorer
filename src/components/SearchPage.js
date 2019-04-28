import React, { useState } from 'react'
import SearchInput from './SearchInput'
import { Container } from 'reactstrap'

const Search = () => {
  const [ searchResults, setSearchResults] = useState([])
  return (
    <Container className='searchPage'>
      <h1>Dependency Explorer</h1>
      <SearchInput searchResults={searchResults} />
    </Container>
  )
}
export default Search
