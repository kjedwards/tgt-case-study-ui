/* -----------------------------------
 *  Reducer for getting the Cons
 *  from the API
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_CONS_BEGIN,
   GET_CONS_SUCCESS,
   GET_CONS_FAILURE
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

 export default function ConsReducer(state = initialState, action) {
    switch(action.type) {
      case GET_CONS_BEGIN: {
        console.log(':::GET CONS BEGIN')
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
      case GET_CONS_SUCCESS: {
        console.log(':::GET CONS SUCCESS')
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
            data: action.payload.cons[0]
          }
        }
      }
      case GET_CONS_FAILURE: {
        console.log(':::GET CONS FAILURE')
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
