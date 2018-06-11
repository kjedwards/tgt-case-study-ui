/* ----------------------------------------------
 * Component to display the return policy
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`

const LabelText = styled.div`
  font-size: 16px;
  padding-right: 15px;
  border-right: 1px solid grey;
`

const DescText = styled.div`
  font-size: 8px;
  padding-left: 15px;
`

class Returns extends Component {
    render () {
      return(
        <Container>
          <LabelText>returns</LabelText>
          <DescText>
            This item must be returned within 30 days of
            the ship date. See <b>return policy</b> for details.
            Prices, promotions, styles, and availability may
            vary by store and online.
          </DescText>
        </Container>
      )
    }
}

export default Returns
