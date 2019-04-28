import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Search from './components/SearchPage'
import axios from 'axios'

function About () {
  return <h2>About</h2>
}

export const Store = React.createContext()
function App () {
  const [isLoading, setLoading] = useState(false)
  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
  // Do something before request is sent
    console.log(config)
    setLoading(true)
    return config
  }, function (error) {
  // Do something with request error
    return Promise.reject(error)
  })

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
  // Do something with response data
    setLoading(false)
    console.log(false)
    return response
  }, function (error) {
  // Do something with response error
    return Promise.reject(error)
  })

  return (
    <Store.Provider value={{
      isLoading: isLoading
    }}>
      <Router>
        <Route path='/' exact component={Search} />
        <Route path='/result/:package' component={About} />
      </Router>
    </Store.Provider>
  )
}

export default App
