import React, { useEffect } from 'react'
import axios from 'axios'
import { API } from '../constants'

const PackagePage = ({ match }) => {
  useEffect(() => {
    const packageName = match.params.package
    const getPackageDetails = async (packageName) => {
      const response = await axios.get(`${API.packageDetails}${packageName}/latest`)
      console.log(response)
    }
    getPackageDetails(packageName)
  }, [])

  return (
    <div>Some Value</div>
  )
}

export default PackagePage
