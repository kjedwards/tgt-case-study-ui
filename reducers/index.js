import { combineReducers } from 'redux'
import ImageReducer from './ImageReducer'
import MiscAttrReducer from './MiscAttrReducer'
import OverallReviewReducer from './OverallReviewReducer'
import ProsReducer from './ProsReducer'
import ConsReducer from './ConsReducer'
import OffersReducer from './OffersReducer'
import PromotionsReducer from './PromotionsReducer'

const rootReducer = combineReducers({
  images: ImageReducer,
  misc: MiscAttrReducer,
  overall: OverallReviewReducer,
  pro: ProsReducer,
  con: ConsReducer,
  offers: OffersReducer,
  promos: PromotionsReducer
})

export default rootReducer
