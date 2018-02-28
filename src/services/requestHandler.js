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

const Get = (url) => HTTP.get(url)
const Login = (url) => HTTPPub.get(url)

export {
  Get,
  Login
}
