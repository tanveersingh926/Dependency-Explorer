import React, { useState } from 'react'
import { Button, Input, Row, Col } from 'reactstrap'
import SearchItems from './SearchItems'
import { API } from '../constants'
import { getDetails } from '../utils'
import { withRouter } from 'react-router-dom'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

const SearchInput = withRouter(({ history }) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const onSearchBtn = () => {
    history.push(`/${searchValue}`)
  }

  const searchPackageDebounced = AwesomeDebouncePromise(getDetails, 500)

  const onSearchInput = async (event) => {
    setSearchValue(event.target.value)
    const response = await searchPackageDebounced(`${API.search}${event.target.value}`)
    setSearchResults(response.data)
  }
  return (
    <Row className='justify-content-md-center align-items-center searchPage-container'>
      <Col xs='8' sm={{ size: 7, offset: 1 }} md={{ size: 6, offset: 2 }} className='search-input-container'>
        <Input type='text' placeholder='Search Packages' bsSize='lg' onChange={onSearchInput} value={searchValue} />
        {!!searchValue && <SearchItems searchResults={searchResults} />}
      </Col>
      <Col xs='4' sm='3' md='2'>
        <Button color='primary' size='lg' block onClick={onSearchBtn}>Search</Button>
      </Col>
    </Row>
  )
})

export default SearchInput
