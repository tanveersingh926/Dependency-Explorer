import React from 'react'
import { Spinner } from 'reactstrap'

const Loader = ({ loading }) => (
  loading && <div className='loader'>
    <div className='spinner-holder'>
      <Spinner color='primary' />
    </div>
  </div>
)

export default Loader
