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
    render () {
      return(
        <Container>
          <Text>quantity:</Text>
          <PlusMinusContainer>
            <Button>
              <i className='fa fa-plus-circle' />
            </Button>
            <Amount> 1 </Amount>
            <Button>
              <i className='fa fa-minus-circle' />
            </Button>
          </PlusMinusContainer>
        </Container>
      )
    }
}


export default Quantity
