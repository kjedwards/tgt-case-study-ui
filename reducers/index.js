import { combineReducers } from 'redux'
import ImageReducer from './ImageReducer'
import MiscAttrReducer from './MiscAttrReducer'
import OverallReviewReducer from './OverallReviewReducer'
import ProsReducer from './ProsReducer'
import ConsReducer from './ConsReducer'
import OffersReducer from './OffersReducer'
import PromotionsReducer from './PromotionsReducer'
import ItemDescReducer from './ItemDescReducer'

const rootReducer = combineReducers({
  images: ImageReducer,
  misc: MiscAttrReducer,
  overall: OverallReviewReducer,
  pro: ProsReducer,
  con: ConsReducer,
  offers: OffersReducer,
  promos: PromotionsReducer,
  desc: ItemDescReducer
})

export default rootReducer
