import React, { useState } from 'react'
import { Button, Input, Row, Col } from 'reactstrap'
import SearchItems from './SearchItems'
import { API } from '../constants'
import axios from 'axios'

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const onSearchBtn = async (e) => {
    let res
    try {
      res = await axios.get(`${API.search}${searchValue}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'

        }
      })

      setSearchResults(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const onSearchInput = async (event) => {
    event.persist()
    setSearchValue(event.target.value)
    let res
    try {
      res = await axios.get(`${API.search}${searchValue}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      setSearchResults(res.data)
    } catch (error) {
      console.log(error)
    }
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
