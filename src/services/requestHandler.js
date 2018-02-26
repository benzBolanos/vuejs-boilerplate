import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const HTTP = axios.create({
  baseURL: API_BASE_URL
})

const get = (url) => HTTP.get(url)

export {
  get
}
