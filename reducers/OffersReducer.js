/* -----------------------------------
 *  Reducer for getting the offers
 *  from the API
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_OFFERS_BEGIN,
   GET_OFFERS_SUCCESS,
   GET_OFFERS_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   formattedPriceValue: '',
   priceQualifier: ''
 }

 export default function OffersReducer(state = initialState, action) {
    switch(action.type) {
      case GET_OFFERS_BEGIN: {
        console.log(':::GET OFFERS BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          formattedPriceValue: '',
          priceQualifier: ''
        }
      }
      case GET_OFFERS_SUCCESS: {
        console.log(':::GET OFFERS SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            formattedPriceValue: '',
            priceQualifier: ''
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            formattedPriceValue: action.payload.offers[0].OfferPrice[0].formattedPriceValue,
            priceQualifier: action.payload.offers[0].OfferPrice[0].priceQualifier
          }
        }
      }
      case GET_OFFERS_FAILURE: {
        console.log(':::GET OFFERS FAILURE')
        console.log(action.payload.error)
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            formattedPriceValue: '',
            priceQualifier: ''
        }
      }
      default:
        return state;
    }
 }
