/* ----------------------------------------------
 * Component to contain all but the overall stars
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import ReviewHeader from './ReviewHeader'
import Review from './Review'

const RvwSummary = styled.div`
  background-color: lightgrey;
  width:100%;
  height: 250px;
`

const RvwHolder = styled.div`
  display: flex;
`


class ReviewSummary extends Component {
    render () {
      return(
        <RvwSummary>
          <ReviewHeader></ReviewHeader>
          <RvwHolder>
            <Review></Review>
            <Review></Review>
          </RvwHolder>
        </RvwSummary>
      )
    }
}


export default ReviewSummary
