import {REQ_DOG_MESSAGE, REQ_SURPRISE, REQ_DOG_FOODS, REQ_CLASSIFY, REQ_VERIFICATION_CODE, REQ_LOGIN, REQ_ALL_GOODS} from './types'

export default {
  [REQ_DOG_MESSAGE] (state, {dogs}) {
    state.dogs = dogs
  },
  [REQ_SURPRISE] (state, {surprise}) {
    state.surprise = surprise
  },
  [REQ_DOG_FOODS] (state, {dogFoods}) {
    state.dogFoods = dogFoods
  },
  [REQ_CLASSIFY] (state, {classify}) {
    state.classify = classify
  },
  [REQ_VERIFICATION_CODE] (state, {users}) {
    state.users = users
  },
  [REQ_LOGIN] (state, {users}) {
    state.users.code = users.code
  },
  [REQ_ALL_GOODS] (state, {allGoods}) {
    state.allGoods = allGoods
  }
}
