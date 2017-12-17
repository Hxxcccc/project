import axios from 'axios'
import {REQ_DOG_MESSAGE, REQ_SURPRISE} from './types'

export default {
  reqDogMessage ({commit}, callback) {
    axios.get('/api/dog')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const dogs = result.data
          commit(REQ_DOG_MESSAGE, {dogs})
          callback && callback()
        }
      })
  },
  reqSurprise ({commit}) {
    axios.get('/api/surprise')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const surprise = result.data
          commit(REQ_SURPRISE, {surprise})
        }
      })
  },

}
