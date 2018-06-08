import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { sizes } from '../../constants/DeviceWidth'

import ReviewTop from './ReviewTop'
import ReviewSummary from './ReviewSummary'

const RvwContainer = styled.div`
  background-color: green;
  width: 40%;
  min-width: 400px;
  order: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media(max-width: ${sizes.tablet}) {
    order: 2;
  }
`


class ReviewContainer extends Component {
    render () {
      return(
        <RvwContainer>
          <ReviewTop></ReviewTop>
          <ReviewSummary></ReviewSummary>
        </RvwContainer>
      )
    }
}


export default ReviewContainer
