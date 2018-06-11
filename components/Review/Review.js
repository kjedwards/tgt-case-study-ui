/* ----------------------------------------------
 * Component to display the actual review
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import Stars from './Stars'

const Container = styled.div`
  margin: 10px;
`

const StarContainer = styled.div`
  margin: 5px;
  font-size: 1em;
`

const ReviewTitle = styled.div`
  margin: 5px;
  font-weight: bold;
  font-size: 16px;
`

const ReviewBody = styled.div`
  font-size: 12px;
  margin: 5px;
  margin-left: 8px;
`

const ReviewFooter = styled.div`
  font-size: 10px
  margin: 5px;
  margin-left: 8px;
`

const Name = styled.a`
  color: #6994c1;
  margin-top: 5px;
  margin-right: 5px;
`

const Date = styled.div`

`

class Review extends Component {
    render () {

      return(
        <Container>
          <StarContainer>
            <Stars rating={this.props.review.data.overallRating}></Stars>
          </StarContainer>
          <ReviewTitle>
            {this.props.review.data.title}
          </ReviewTitle>
          <ReviewBody>
            {this.props.review.data.review}
          </ReviewBody>
          <ReviewFooter>
            <Name>{this.props.review.data.screenName}</Name>
            <Date>{this.props.review.data.datePosted}</Date>
          </ReviewFooter>
        </Container>
      )
    }
}


export default Review
