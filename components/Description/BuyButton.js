/* ----------------------------------------------
 * Component for Pick Up and Cart buttons
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-right: 5px;
  width: 100%;
`

const Pickup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

const PickupButton = styled.button`
  background-color: #3a3a3a;
  padding: 5px 20px;
  color: white;
  border-radius: 3px;
  border: 0px;
  height: 30px;
`

const CartButton = styled.button`
  background-color: #e50909;
  padding: 5px 20px;
  color: white;
  border-radius: 3px;
  border: 0px;
  height: 30px;
  flex-grow: 1;
`

const FindStore = styled.a`
  color: black;
  font-size: 10px;
  font-weight: bold;
  padding: 3px;
`

class BuyButton extends Component {
    render () {
      return(
        <Container>
          { this.props.render ?
              this.props.type == 'pickup' ?
                <Pickup>
                  <PickupButton>PICK UP IN STORE</PickupButton>
                  <FindStore>find in a store</FindStore>
                </Pickup>
                : <CartButton>ADD TO CART</CartButton>
            : null
          }

        </Container>
      )
    }
}

export default BuyButton
