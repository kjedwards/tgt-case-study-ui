/* ------------------------------------------------------
 *  Actions related to retrieving images
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

import {
  GET_OFFERS_BEGIN,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE
} from '../constants/ActionTypes'

import {
  SERVER_NAME,
  OFFERS_ENDPOINT
} from '../constants/ServerConstants'

export function getOffers() {
  return dispatch => {
    dispatch(getOffersBegin())
    return fetch(SERVER_NAME + OFFERS_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getOffersSuccess(json))
      })
      .catch(error => {
        dispatch(getOffersFailure(error))
      })
  }
}

const getOffersBegin = () => ({
  type: GET_OFFERS_BEGIN
})

const getOffersSuccess = offers => ({
  type: GET_OFFERS_SUCCESS,
  payload: { offers }
})

const getOffersFailure = error => ({
  type: GET_OFFERS_FAILURE,
  payload: { error }
})
