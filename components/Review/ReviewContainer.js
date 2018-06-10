/* ----------------------------------------------
 * Component to contain all of the review info
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { SIZES } from '../../constants/DeviceWidth'

import ReviewTop from './ReviewTop'
import ReviewSummary from './ReviewSummary'

const RvwContainer = styled.div`
  width: 40%;
  min-width: 400px;
  order: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media(max-width: ${SIZES.TABLET}) {
    order: 2;
  }
`


class ReviewContainer extends Component {
    render () {
      return(
        <RvwContainer>
          <ReviewTop overallRating={this.props.overallRating}></ReviewTop>
          <ReviewSummary></ReviewSummary>
        </RvwContainer>
      )
    }
}


export default ReviewContainer
