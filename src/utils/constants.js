const API_BASE_URL = process.env.NODE_ENV === 'development' ? process.env.API_TEST_URL : process.env.API_BASE_URL

export {
  API_BASE_URL
}
