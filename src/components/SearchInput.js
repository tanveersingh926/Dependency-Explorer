import React, { useState } from 'react'
import { Button, Input, Row, Col } from 'reactstrap'
import SearchItems from './SearchItems'
import { API } from '../constants'
import { getDetails } from '../utils'

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const onSearchBtn = async (e) => {
    const res = await getDetails(`${API.search}${searchValue}`)
    setSearchResults(res.data)
  }

  const onSearchInput = async (event) => {
    setSearchValue(event.target.value)
    const res = await getDetails(`${API.search}${searchValue}`)
    setSearchResults(res.data)
  }
  return (
    <Row className='justify-content-md-center align-items-center searchPage-container'>
      <Col xs='12' sm='6' offset='2' className='search-input-container'>
        <Input type='text' placeholder='Search Packages' bsSize='lg' onChange={(event) => onSearchInput(event)} value={searchValue} />
        {!!searchValue && <SearchItems searchResults={searchResults} />}
      </Col>
      <Col xs='12' sm='2'>
        <Button color='primary' size='lg' block onClick={onSearchBtn}>Search</Button>
      </Col>
    </Row>
  )
}

export default SearchInput
