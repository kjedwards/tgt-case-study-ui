/* ------------------------------------------------------
 *  Actions related to retrieving images
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

import {
  GET_PROMOTIONS_BEGIN,
  GET_PROMOTIONS_SUCCESS,
  GET_PROMOTIONS_FAILURE
} from '../constants/ActionTypes'

import {
  SERVER_NAME,
  PROMO_ENDPOINT
} from '../constants/ServerConstants'

export function getPromotions() {
  return dispatch => {
    dispatch(getPromotionsBegin())
    return fetch(SERVER_NAME + PROMO_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getPromotionsSuccess(json))
      })
      .catch(error => {
        dispatch(getPromotionsFailure(error))
      })
  }
}

const getPromotionsBegin = () => ({
  type: GET_PROMOTIONS_BEGIN
})

const getPromotionsSuccess = promotions => ({
  type: GET_PROMOTIONS_SUCCESS,
  payload: { promotions }
})

const getPromotionsFailure = error => ({
  type: GET_PROMOTIONS_FAILURE,
  payload: { error }
})
