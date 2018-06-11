/* ------------------------------------------------------
 *  Actions related to retrieving item description
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

import {
  GET_ITEM_DESC_BEGIN,
  GET_ITEM_DESC_SUCCESS,
  GET_ITEM_DESC_FAILURE
} from '../constants/ActionTypes'

import {
  SERVER_NAME,
  ITEM_DESC_ENDPOINT
} from '../constants/ServerConstants'

export function getItemDesc() {
  return dispatch => {
    dispatch(getItemDescBegin())
    return fetch(SERVER_NAME + ITEM_DESC_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getItemDescSuccess(json))
      })
      .catch(error => {
        dispatch(getItemDescFailure(error))
      })
  }
}

const getItemDescBegin = () => ({
  type: GET_ITEM_DESC_BEGIN
})

const getItemDescSuccess = desc => ({
  type: GET_ITEM_DESC_SUCCESS,
  payload: { desc }
})

const getItemDescFailure = error => ({
  type: GET_ITEM_DESC_FAILURE,
  payload: { error }
})
