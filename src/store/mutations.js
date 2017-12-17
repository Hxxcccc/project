import {REQ_DOG_MESSAGE, REQ_SURPRISE} from './types'

export default {
  [REQ_DOG_MESSAGE] (state, {dogs}) {
    state.dogs = dogs
  },
  [REQ_SURPRISE] (state, {surprise}) {
    state.surprise = surprise
  }
}
