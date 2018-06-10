/* ------------------------------------------------------
 *  Actions related to retrieving pros
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

import {
  GET_PROS_BEGIN,
  GET_PROS_SUCCESS,
  GET_PROS_FAILURE
} from '../constants/ActionTypes'

import {
  SERVER_NAME,
  PROS_ENDPOINT
} from '../constants/ServerConstants'

export function getPros() {
  return dispatch => {
    dispatch(getProsBegin())
    return fetch(SERVER_NAME + PROS_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getProsSuccess(json))
      })
      .catch(error => {
        dispatch(getProsFailure(error))
      })
  }
}

const getProsBegin = () => ({
  type: GET_PROS_BEGIN
})

const getProsSuccess = Pros => ({
  type: GET_PROS_SUCCESS,
  payload: { Pros }
})

const getProsFailure = error => ({
  type: GET_PROS_FAILURE,
  payload: { error }
})
