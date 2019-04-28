import React from 'react'

const DependenciesList = ({ dependencies }) => (
  <ul>
    {
      Object.keys(dependencies)
        .map((key, index) => (
          <li key={index}>{key}</li>
        ))
    }
  </ul>
)

export default DependenciesList
