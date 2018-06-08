import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { sizes } from '../../constants/DeviceWidth'

const RvwTop = styled.div`
  background-color: grey;
  height: 50px;
  width: 100%;
`


class ReviewTop extends Component {
    render () {
      return(
        <RvwTop></RvwTop>
      )
    }
}


export default ReviewTop
