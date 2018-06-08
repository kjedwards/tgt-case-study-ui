import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { sizes } from '../constants/DeviceWidth'

const DescContainer = styled.div`
  background-color: blue;
  height: 800px;
  width: 50%;
  order: 2;

  @media(max-width: ${sizes.mobileLarge}) {
    order: 1;
  }
`


class DescriptionContainer extends Component {
    render () {
      return(
        <DescContainer></DescContainer>
      )
    }
}


export default DescriptionContainer
