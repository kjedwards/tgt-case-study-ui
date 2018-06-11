/* ----------------------------------------------
 * Container for Pick Up and Cart buttons
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import BuyButton from './BuyButton'

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0px;
`

class BuyButtonContainer extends Component {
    render () {
      var renderPickup = this.props.channelCode == 0
                          || this.props.channelCode == 2 ?
                          true : false

      var renderAddCart = this.props.channelCode == 0
                          || this.props.channelCode == 1 ?
                          true : false

      return(
        <Container>
              <BuyButton render={renderPickup} type='pickup'></BuyButton>
              <BuyButton render={renderAddCart} type='cart'></BuyButton>

              { !renderPickup && !renderAddCart ?
                <p>Item Unavailable</p> : null }

        </Container>
      )
    }
}

export default BuyButtonContainer
