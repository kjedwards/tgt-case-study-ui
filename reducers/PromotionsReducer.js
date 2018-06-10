/* -----------------------------------
 *  Reducer for getting the offers
 *  from the API
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_PROMOTIONS_BEGIN,
   GET_PROMOTIONS_SUCCESS,
   GET_PROMOTIONS_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   promos: []
 }

 export default function PromotionsReducer(state = initialState, action) {
    switch(action.type) {
      case GET_PROMOTIONS_BEGIN: {
        console.log(':::GET PROMOTIONS BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          promos: []
        }
      }
      case GET_PROMOTIONS_SUCCESS: {
        console.log(':::GET PROMOTIONS SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            promos: []
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            promos: action.payload.promotions
          }
        }
      }
      case GET_PROMOTIONS_FAILURE: {
        console.log(':::GET PROMOTIONS FAILURE')
        console.log(action.payload.error)
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            promos: []
        }
      }
      default:
        return state;
    }
 }
