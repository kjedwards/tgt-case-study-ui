import { combineReducers } from 'redux'
import ImageReducer from './ImageReducer'
import MiscAttrReducer from './MiscAttrReducer'

const rootReducer = combineReducers({
  images: ImageReducer,
  misc: MiscAttrReducer
})

export default rootReducer
