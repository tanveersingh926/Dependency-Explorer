import React from 'react'
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap'
import { Store } from '../App'
import { Link } from 'react-router-dom'

const SearchItems = ({ searchResults }) => {
  const { isLoading } = React.useContext(Store)
  const wrapperStyling = isLoading || !searchResults.length
  return (
    <div className={`search-results-container ${wrapperStyling ? 'no-package-found' : ''}`}>
      {isLoading
        ? <Spinner color='secondary' />
        : searchResults.length ? <ListGroup>
          {searchResults.map((item, index) => (
            <ListGroupItem key={item.name + index}>
              <Link to={`/${item.name.toLowerCase()}`}>{item.name}</Link>
            </ListGroupItem>
          ))}
        </ListGroup> : 'No packages available'
      }

    </div>

  )
}
export default SearchItems
