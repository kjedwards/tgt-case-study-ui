/* -----------------------------------
 *  Reducer for getting the item description
 *  from the API
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_ITEM_DESC_BEGIN,
   GET_ITEM_DESC_SUCCESS,
   GET_ITEM_DESC_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   highlights: []
 }

 export default function ItemDescReducer(state = initialState, action) {
    switch(action.type) {
      case GET_ITEM_DESC_BEGIN: {
        console.log(':::GET ITEM_DESC BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          highlights: []
        }
      }
      case GET_ITEM_DESC_SUCCESS: {
        console.log(':::GET ITEM_DESC SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            highlights: []
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            highlights: action.payload.desc[0].features
          }
        }
      }
      case GET_ITEM_DESC_FAILURE: {
        console.log(':::GET ITEM_DESC FAILURE')
        console.log(action.payload.error)
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            highlights: []
        }
      }
      default:
        return state;
    }
 }
