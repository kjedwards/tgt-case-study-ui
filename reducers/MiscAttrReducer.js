/* -----------------------------------
 *  Reducer for getting the misc
 *  attributes from the API
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
   title: ''
 }

 export default function MiscAttrReducer(state = initialState, action) {
    switch(action.type) {
      case GET_MISC_ATTR_BEGIN: {
        console.log(':::GET IMAGES BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          title: ''
        }
      }
      case GET_MISC_ATTR_SUCCESS: {
        console.log(':::GET IMAGES SUCCESS')
        console.log(action.payload)
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            title: ''
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            title: action.payload.miscAttr.title
          }
        }
      }
      case GET_MISC_ATTR_FAILURE: {
        console.log(':::GET IMAGES FAILURE')
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
