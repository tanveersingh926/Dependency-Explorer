import React from 'react'
import SearchInput from './SearchInput'
import { Container } from 'reactstrap'

const SearchPage = () => {
  return (
    <Container className='searchPage' fluid>
      <h1>Dependency Explorer</h1>
      <SearchInput />
    </Container>
  )
}
export default SearchPage
