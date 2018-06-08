/* ----------------------------------------------
 * Component displaying the product highlights section
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const Header = styled.div`
  font-size: 32px;
  margin: 10px 0px;
`

const List = styled.ul`
  padding-left: 20px;
`

const ListMember = styled.li`
  padding: 3px;
`

class ProductHighlights extends Component {
    render () {
      return(
        <Container>
          <Header>product highlights</Header>
          <List>
            <ListMember>Wattage Output: 1100 watts</ListMember>
            <ListMember>Wattage Output: 1100 watts</ListMember>
            <ListMember>Wattage Output: 1100 watts</ListMember>
            <ListMember>Wattage Output: 1100 watts</ListMember>
            <ListMember>Wattage Output: 1100 watts</ListMember>
            <ListMember>Wattage Output: 1100 watts</ListMember>
            <ListMember>Wattage Output: 1100 watts</ListMember>
          </List>
        </Container>
      )
    }
}

export default ProductHighlights
