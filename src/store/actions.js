import axios from 'axios'
import {REQ_DOG_MESSAGE, REQ_SURPRISE, REQ_DOG_FOODS} from './types'

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
  reqDogFoods ({commit}, callback) {
    axios.get('/api/dogFoods')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const dogFoods = result.data
          commit(REQ_DOG_FOODS, {dogFoods})
          callback && callback()
        }
      })
  },

}
