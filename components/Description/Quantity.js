/* ----------------------------------------------
 * Component displaying the quantity of items
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid lightgrey;
  width: 150px;
  align-items: center;
`

const Text = styled.div`
  font-size: 11px;
  float: left;
  padding: 7px;
`

const PlusMinusContainer = styled.div`
  float: right;
  display: flex;
  align-items: center;
`

const Button = styled.div`
  color: lightgrey;
  padding: 3px 7px 2px 7px;
  font-size: 20px;
`

const Amount = styled.div`

`


class Quantity extends Component {
    constructor(props) {
      super(props)

      this.upQuantity = this.upQuantity.bind(this)
      this.downQuantity = this.downQuantity.bind(this)

      this.state = { quantity: 1 }
    }

    downQuantity(e) {
      if(this.state.quantity > 1){
        var quantity = this.state.quantity
        quantity--
        this.setState({quantity: quantity})
      }
    }

    upQuantity(e) {
      var quantity = this.state.quantity
      quantity++
      this.setState({quantity: quantity})
    }

    render () {
      return(
        <Container>
          <Text>quantity:</Text>
          <PlusMinusContainer>
            <Button onClick={e => this.downQuantity(e)}>
              <i className='fa fa-minus-circle' />
            </Button>
            <Amount> {this.state.quantity} </Amount>
            <Button onClick={e => this.upQuantity(e)}>
              <i className='fa fa-plus-circle' />
            </Button>
          </PlusMinusContainer>
        </Container>
      )
    }
}


export default Quantity
