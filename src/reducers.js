import {
  combineReducers,
} from 'redux'
import {
  SET_KEY,
} from './actions'

const publicKey = (state = {}, action) => {
  switch (action.type) {
    case SET_KEY:
      return action.key
    default:
      return state
  }
}

const rootReducer = combineReducers({
  publicKey,
})

export default rootReducer
