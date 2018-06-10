/* ------------------------------------------------------
 *  Actions related to getting the overall rating
 *
 *  Author: Kaylee Edwards (z0027hd)
 *  Last Updated: 06/08/2018
 *  Last Edited By: Kaylee Edwards (z0027hd)
 * -----------------------------------------------------*/

 import {
   GET_OVERALL_REVIEW_BEGIN,
   GET_OVERALL_REVIEW_SUCCESS,
   GET_OVERALL_REVIEW_FAILURE
 } from '../constants/ActionTypes'

import {
  SERVER_NAME,
  OVERALL_REVIEW_ENDPOINT
} from '../constants/ServerConstants'

export function getOverallReview() {
  return dispatch => {
    dispatch(getOverallReviewBegin())
    return fetch(SERVER_NAME + OVERALL_REVIEW_ENDPOINT,
                  {
                    method: 'GET',
                    headers: {'Accept': 'application/json'}
                  }
                )
      .then(res => res.json())
      .then(json => {
        dispatch(getOverallReviewSuccess(json))
      })
      .catch(error => {
        dispatch(getOverallReviewFailure(error))
      })
  }
}

const getOverallReviewBegin = () => ({
  type: GET_OVERALL_REVIEW_BEGIN
})

const getOverallReviewSuccess = overallReview => ({
  type: GET_OVERALL_REVIEW_SUCCESS,
  payload: { overallReview }
})

const getOverallReviewFailure = error => ({
  type: GET_OVERALL_REVIEW_FAILURE,
  payload: { error }
})
