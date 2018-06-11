/* -----------------------------------
 *  Reducer for getting the Pros
 *  from the API
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_PROS_BEGIN,
   GET_PROS_SUCCESS,
   GET_PROS_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   data: {
     RatableAttributes: [],
     datePosted: '',
     overallRating: 0,
     review: '',
     reviewKey: '',
     screenName: '',
     title: ''
   }
 }

 export default function ProsReducer(state = initialState, action) {
    switch(action.type) {
      case GET_PROS_BEGIN: {
        console.log(':::GET PROS BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          data: {
            RatableAttributes: [],
            datePosted: '',
            overallRating: 0,
            review: '',
            reviewKey: '',
            screenName: '',
            title: ''
          }
        }
      }
      case GET_PROS_SUCCESS: {
        console.log(':::GET PROS SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            data: {
              RatableAttributes: [],
              datePosted: '',
              overallRating: 0,
              review: '',
              reviewKey: '',
              screenName: '',
              title: ''
            }
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            data: action.payload.Pros[0]
          }
        }
      }
      case GET_PROS_FAILURE: {
        console.log(':::GET PROS FAILURE')
        console.log(action.payload.error)
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            data: {
              RatableAttributes: [],
              datePosted: '',
              overallRating: 0,
              review: '',
              reviewKey: '',
              screenName: '',
              title: ''
            }
        }
      }
      default:
        return state;
    }
 }
