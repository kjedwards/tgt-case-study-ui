/* ------------------------------------------------------
 *  Actions related to retrieving cons
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

import {
  GET_CONS_BEGIN,
  GET_CONS_SUCCESS,
  GET_CONS_FAILURE
} from '../constants/ActionTypes'

import {
  SERVER_NAME,
  CONS_ENDPOINT
} from '../constants/ServerConstants'

export function getCons() {
  return dispatch => {
    dispatch(getConsBegin())
    return fetch(SERVER_NAME + CONS_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getConsSuccess(json))
      })
      .catch(error => {
        dispatch(getConsFailure(error))
      })
  }
}

const getConsBegin = () => ({
  type: GET_CONS_BEGIN
})

const getConsSuccess = cons => ({
  type: GET_CONS_SUCCESS,
  payload: { cons }
})

const getConsFailure = error => ({
  type: GET_CONS_FAILURE,
  payload: { error }
})
