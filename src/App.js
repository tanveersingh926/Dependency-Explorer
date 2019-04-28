import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import PackageDetailsPage from './components/PackageDetailsPage'
import { configureAxios } from './utils'

export const Store = React.createContext()

function App () {
  const [isLoading, setLoading] = useState(false)

  configureAxios(setLoading)

  return (
    <Store.Provider value={{
      isLoading: isLoading
    }}>
      <Router>
        <Route path='/' exact component={SearchPage} />
        <Route path='/:package' component={PackageDetailsPage} />
      </Router>
    </Store.Provider>
  )
}

export default App
