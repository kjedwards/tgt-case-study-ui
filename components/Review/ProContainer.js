/* ----------------------------------------------
 * Component to display the header for pros
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  width: 50%;
  float: left;
`

const Header = styled.div`
  font-size: 24px;
`

const Content = styled.div`
  font-size: 11px;
`


class ProContainer extends Component {
    render () {
      return(
        <Container>
          <Header>Pro</Header>
          <Content>most helpful 4-5 star review</Content>
        </Container>
      )
    }
}


export default ProContainer
