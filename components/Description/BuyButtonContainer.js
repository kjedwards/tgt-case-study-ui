import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import BuyButton from './BuyButton'

const Container = styled.div`
  display: flex
  margin: 5px 0px;
`


class BuyButtonContainer extends Component {
    render () {
      return(
        <Container>
          <BuyButton></BuyButton>
          <BuyButton></BuyButton>
        </Container>
      )
    }
}

export default BuyButtonContainer
