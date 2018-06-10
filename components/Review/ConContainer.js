/* ----------------------------------------------
 * Component to display the header for cons
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  width: 50%;
  float: right;
`

const Header = styled.div`
  font-size: 24px;
`

const Content = styled.div`
  font-size: 11px;
`


class ConContainer extends Component {
    render () {
      return(
        <Container>
          <Header>CON</Header>
          <Content>most helpful 1-2 star review</Content>
        </Container>
      )
    }
}


export default ConContainer
