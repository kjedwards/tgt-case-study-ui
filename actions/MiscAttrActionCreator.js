/* ------------------------------------------------------
 *  Actions related to retrieving miscellaneous attributes
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

import {
  GET_MISC_ATTR_BEGIN,
  GET_MISC_ATTR_SUCCESS,
  GET_MISC_ATTR_FAILURE
} from '../constants/ActionTypes'

import {
  SERVER_NAME,
  MISC_ATTR_ENDPOINT
} from '../constants/ServerConstants'

export function getMiscAttr() {
  return dispatch => {
    dispatch(getMiscAttrBegin())
    return fetch(SERVER_NAME + MISC_ATTR_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getMiscAttrSuccess(json))
      })
      .catch(error => {
        dispatch(getMiscAttrFailure(error))
      })
  }
}

const getMiscAttrBegin = () => ({
  type: GET_MISC_ATTR_BEGIN
})

const getMiscAttrSuccess = miscAttr => ({
  type: GET_MISC_ATTR_SUCCESS,
  payload: { miscAttr }
})

const getMiscAttrFailure = error => ({
  type: GET_MISC_ATTR_FAILURE,
  payload: { error }
})
