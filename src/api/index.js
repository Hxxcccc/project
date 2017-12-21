import axios from 'axios'

export const getUrl = (url) => {
  return axios.get(url)
}

export const postUrl = (url) => {
  return axios.post(url)
}
