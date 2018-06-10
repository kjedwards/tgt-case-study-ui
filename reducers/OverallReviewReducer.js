/* -----------------------------------
 *  Reducer for getting the overall review
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_OVERALL_REVIEW_BEGIN,
   GET_OVERALL_REVIEW_SUCCESS,
   GET_OVERALL_REVIEW_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   rating: 0
 }

 export default function OverallReviewReducer(state = initialState, action) {
    switch(action.type) {
      case GET_OVERALL_REVIEW_BEGIN: {
        console.log(':::GET OVERALL REVIEW BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          rating: 0
        }
      }
      case GET_OVERALL_REVIEW_SUCCESS: {
        console.log(':::GET OVERALL REVIEWS SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            rating: 0
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            rating: action.payload.overallReview.rating
          }
        }
      }
      case GET_OVERALL_REVIEW_FAILURE: {
        console.log(':::GET OVERALL REVIEWS FAILURE')
        console.log(action.payload.error)
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            rating: 0
        }
      }
      default:
        return state;
    }
 }
