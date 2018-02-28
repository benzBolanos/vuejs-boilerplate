import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const HTTP = axios.create({
  baseURL: API_BASE_URL,
  contentType: 'text',
  withCredentials: true
})

const HTTPPub = axios.create({
  baseURL: API_BASE_URL,
  contentType: 'text'
})

const Get = (url) => {
  console.log('http:',HTTP)
  return HTTP.get(url)
}
const Login = (url) => HTTPPub.get(url)

const post = (url) => HTTP.post(url)

export {
  Get,
  Login
}
