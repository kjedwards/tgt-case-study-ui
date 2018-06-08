import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import ProContainer from './ProContainer'
import ConContainer from './ConContainer'

const RvwHeader = styled.div`
  margin: 10px;
  height: 60px;
  border-bottom: 1px solid grey;
`


class ReviewHeader extends Component {
    render () {
      return(
        <RvwHeader>
          <ProContainer></ProContainer>
          <ConContainer></ConContainer>
        </RvwHeader>
      )
    }
}


export default ReviewHeader
