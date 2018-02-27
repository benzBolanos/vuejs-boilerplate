import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const HTTP = axios.create({
  baseURL: API_BASE_URL
})

const HTTPLogin = axios.create({
  baseURL: API_BASE_URL
})

const Get = (url) => HTTP.get(url)
const Login = (url) => HTTPLogin.get(url)

export {
  Get,
  Login
}
