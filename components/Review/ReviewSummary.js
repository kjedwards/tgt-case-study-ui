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
  background-color: #f7f7f7;
  width:100%;
`

const RvwHolder = styled.div`
  display: flex;
`

const ProRvw = styled.div`
  width: 45%
  margin: 5px;
  margin-left: 0px;
`

const ConRvw = styled.div`
  width: 50%;
  margin: 5px;
  margin-left: 0px;
`

class ReviewSummary extends Component {
    render () {
      return(
        <RvwSummary>
          <ReviewHeader></ReviewHeader>
          <RvwHolder>
            <ProRvw>
              <Review review={this.props.pro}></Review>
            </ProRvw>
            <ConRvw>
              <Review review={this.props.con}></Review>
            </ConRvw>
          </RvwHolder>
        </RvwSummary>
      )
    }
}


export default ReviewSummary
