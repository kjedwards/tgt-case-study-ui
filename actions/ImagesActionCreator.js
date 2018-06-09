/* ------------------------------------------------------
 *  Actions related to retrieving images
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

import {
  GET_IMAGES_BEGIN,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE
} from '../constants/ActionTypes'

import {
  SERVER_NAME,
  IMAGES_ENDPOINT
} from '../constants/ServerConstants'

export function getImages() {
  return dispatch => {
    dispatch(getImagesBegin())
    return fetch(SERVER_NAME + IMAGES_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getImagesSuccess(json))
      })
      .catch(error => {
        dispatch(getImagesFailure(error))
      })
  }
}

const getImagesBegin = () => ({
  type: GET_IMAGES_BEGIN
})

const getImagesSuccess = images => ({
  type: GET_IMAGES_SUCCESS,
  payload: { images }
})

const getImagesFailure = error => ({
  type: GET_IMAGES_FAILURE,
  payload: { error }
})
