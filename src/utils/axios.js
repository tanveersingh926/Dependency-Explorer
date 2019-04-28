import axios from 'axios'
import { showError } from '.'

export const configureAxios = (setLoading) => {
  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    setLoading(true)
    return config
  }, function (error) {
    showError()
    return Promise.reject(error)
  })

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    setLoading(false)
    return response
  }, function (error) {
    showError()
    return Promise.reject(error)
  })
}
