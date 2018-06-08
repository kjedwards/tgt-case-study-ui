/* ----------------------------------------------
 * Component displaying the price
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
`

const Number = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Subtext = styled.div`
  font-size: 8px;

`


class Price extends Component {
    render () {
      return(
        <Container>
          <Number>999.99</Number>
          <Subtext>online price</Subtext>
        </Container>
      )
    }
}


export default Price
