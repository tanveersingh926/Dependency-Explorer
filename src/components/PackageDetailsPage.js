import React, { useEffect, useState, useContext } from 'react'
import { API, MESSAGES } from '../constants'
import { Store } from '../App'
import { getDetails } from '../utils'
import Navbar from './Navbar'
import DependenciesList from './DependenciesList'
import {
  Container,
  Row,
  Col } from 'reactstrap'
import Loader from './Loader'

const PackagePage = ({ match }) => {
  const [packageDetails, setPackageDetails] = useState({ dependencies: {} })
  const [packageNotFound, setPackageNotFound] = useState(true)
  const packageName = match.params.package
  const { isLoading } = useContext(Store)

  useEffect(() => {
    const getPackageDetails = async (packageName) => {
      try {
        const response = await getDetails(`${API.packageDetails}${packageName}/latest`)
        response.data.dependencies = response.data.dependencies || {}
        setPackageDetails(response.data)
        setPackageNotFound(false)
      } catch (error) {
        if (error.response.status === 404) {
          setPackageNotFound(true)
        }
      }
    }
    getPackageDetails(packageName)
  }, [])

  const renderDependenciesCount = () => (
    Object.keys(packageDetails.dependencies).length !== 0 ? Object.keys(packageDetails.dependencies).length : '0'
  )
  return (
    <>
      <Navbar />
      <Container fluid className='package-detail-container'>
        {packageNotFound && <h1>{MESSAGES.noPackageFound}</h1>}

        {!packageNotFound && <h1>Package Overview - <span>{packageName}</span></h1>}
        {!packageNotFound && <Row>
          <Col xs='12'>Found {renderDependenciesCount()} dependencies for "{packageName}"</Col>
          <Col xs='12'>
            <DependenciesList dependencies={packageDetails.dependencies} />
          </Col>
        </Row>}
      </Container>

      <Loader loading={isLoading} />
    </>
  )
}

export default PackagePage
