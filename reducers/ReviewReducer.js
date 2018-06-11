/* -----------------------------------
 *  Reducer for getting the reviews
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_REVIEWS_BEGIN,
   GET_REVIEWS_SUCCESS,
   GET_REVIEWS_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   reviews: []
 }

 export default function ReviewReducer(state = initialState, action) {
    switch(action.type) {
      case GET_REVIEWS_BEGIN: {
        console.log(':::GET REVIEWS BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          reviews: []
        }
      }
      case GET_REVIEWS_SUCCESS: {
        console.log(':::GET REVIEWS SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            reviews: []
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            reviews: action.payload.reviews
          }
        }
      }
      case GET_IMAGES_FAILURE: {
        console.log(':::GET REVIEWS FAILURE')
        console.log(action.payload.error)
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            alternateImages: [],
            mainImage: '',
            numImages: 0
        }
      }
      default:
        return state;
    }
 }
