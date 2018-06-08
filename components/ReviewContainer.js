import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { sizes } from '../constants/DeviceWidth'

const RvwContainer = styled.div`
  background-color: green;
  height: 200px;
  width: 40%;
  min-width: 400px;
  order: 1;

  @media(max-width: ${sizes.mobileLarge}) {
    order: 2;
  }
`


class ReviewContainer extends Component {
    render () {
      return(
        <RvwContainer></RvwContainer>
      )
    }
}


export default ReviewContainer
