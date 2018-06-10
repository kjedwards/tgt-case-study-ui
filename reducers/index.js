import { combineReducers } from 'redux'
import ImageReducer from './ImageReducer'
import MiscAttrReducer from './MiscAttrReducer'
import OverallReviewReducer from './OverallReviewReducer'

const rootReducer = combineReducers({
  images: ImageReducer,
  misc: MiscAttrReducer,
  overall: OverallReviewReducer
})

export default rootReducer
