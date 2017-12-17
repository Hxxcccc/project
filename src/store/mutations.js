import {REQ_DOG_MESSAGE, REQ_SURPRISE, REQ_DOG_FOODS, REQ_CLASSIFY} from './types'

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
  }
}
