import { combineReducers } from 'redux'
import ImageReducer from './ImageReducer'
import MiscAttrReducer from './MiscAttrReducer'
import OverallReviewReducer from './OverallReviewReducer'
import ProsReducer from './ProsReducer'
import ConsReducer from './ConsReducer'

const rootReducer = combineReducers({
  images: ImageReducer,
  misc: MiscAttrReducer,
  overall: OverallReviewReducer,
  pro: ProsReducer,
  con: ConsReducer
})

export default rootReducer
