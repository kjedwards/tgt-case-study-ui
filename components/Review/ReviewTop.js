/* ----------------------------------------------
 * Component to display the overall ratings
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'

import Stars from './Stars'

const RvwTop = styled.div`
  height: 50px;
  width: 100%;
`
const StarContainer = styled.div`
  float: left;
  display: flex;
  align-items: center;
  margin: 20px;
  font-size: 18px;
`

const Text = styled.div`
  font-weight: bold;
  font-size: 11px;
  margin: 10px;
  text-decoration: none;
`

const LinkDiv = styled.div`
  float: right;
  display: flex;
  align-items: center;
  margin: 20px
  margin-right: 5px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:active {
        text-decoration: none;
        color: red;
    }
`;

class ReviewTop extends Component {
    render () {
      console.log(this.props.overallRating.rating)
      return(
        <RvwTop>
          <StarContainer>
            <Stars rating={this.props.overallRating.rating}></Stars>
            <Text>overall</Text>
          </StarContainer>
          <LinkDiv>
            <Text>
              <StyledLink to='/reviews'>view all reviews</StyledLink>
            </Text>
          </LinkDiv>
        </RvwTop>
      )
    }
}


export default ReviewTop
