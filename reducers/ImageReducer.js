/* -----------------------------------
 *  Reducer for getting the images
 *  from the API
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * ----------------------------------- */

 import {
   GET_IMAGES_BEGIN,
   GET_IMAGES_SUCCESS,
   GET_IMAGES_FAILURE
 } from '../constants/ActionTypes'

 const initialState = {
   loading: true,
   error: null,
   alternateImages: [],
   mainImage: {},
   numImages: 0
 }

 export default function ImageReducer(state = initialState, action) {
    switch(action.type) {
      case GET_IMAGES_BEGIN: {
        console.log(':::GET IMAGES BEGIN')
        return {
          ...state,
          loading: true,
          error: null,
          alternateImages: [],
          mainImage: '',
          numImages: 0
        }
      }
      case GET_IMAGES_SUCCESS: {
        console.log(':::GET IMAGES SUCCESS')
        if(action.payload === undefined) {
          return {
            ...state,
            loading: false,
            error: null,
            alternateImages: [],
            mainImage: '',
            numImages: 0
          }
        } else {
          return {
            ...state,
            loading: false,
            error: null,
            alternateImages: action.payload.images.AlternateImages,
            mainImage: action.payload.images.PrimaryImage[0],
            numImages: action.payload.images.ImageCount
          }
        }
      }
      case GET_IMAGES_FAILURE: {
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
