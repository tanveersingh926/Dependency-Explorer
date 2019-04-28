import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Search from './components/SearchPage'
import PackagePage from './components/PackagePage'
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
        <Route path='/' exact component={Search} />
        <Route path='/:package' component={PackagePage} />
      </Router>
    </Store.Provider>
  )
}

export default App
