import axios from 'axios'
import { API_BASE_URL } from '../utils/constants'

const HTTP = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: 'token'
  }
})

const get = (url) => HTTP.get(`${API_BASE_URL + url}`)

export {
  get
}
