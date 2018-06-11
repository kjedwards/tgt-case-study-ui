/* -----------------------------------
 *  Reducer for getting the offers
 *  from the API
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_MISC_ATTR_BEGIN,
   GET_MISC_ATTR_SUCCESS,
   GET_MISC_ATTR_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   title: '',
   purchasingChannelCode: -1
 }

 export default function MiscAttrReducer(state = initialState, action) {
    switch(action.type) {
      case GET_MISC_ATTR_BEGIN: {
        console.log(':::GET MISC ATTR BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          title: '',
          purchasingChannelCode: -1
        }
      }
      case GET_MISC_ATTR_SUCCESS: {
        console.log(':::GET MISC ATTR SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            title: '',
            purchasingChannelCode: -1
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            title: action.payload.miscAttr.title,
            purchasingChannelCode: action.payload.miscAttr.purchasingChannelCode
          }
        }
      }
      case GET_MISC_ATTR_FAILURE: {
        console.log(':::GET MISC ATTR FAILURE')
        console.log(action.payload.error)
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            title: '',
            purchasingChannelCode: -1
        }
      }
      default:
        return state;
    }
 }
