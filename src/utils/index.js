import axios from 'axios'
import { configureAxios as axiosConfig } from './axios'

export const showError = (errorMsg = 'Something went bad. Please try again later.') => {
  window.alert(errorMsg)
}

export const getDetails = (url, headers) => {
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers
    }
  })
}

export const configureAxios = axiosConfig
