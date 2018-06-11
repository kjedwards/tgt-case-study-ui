/* ----------------------------------------------
 * Component for the Registry, List, and Share buttons
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  width: 33%;
`

const Button = styled.button`
  background-color: #e5e5e5;
  font-size: 9px;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 3px;
  border: 0px;
  width: 95%;

  &:active &:hover {
    background-color: #dbdbdb;
  }
`

class ShareButton extends Component {
    render () {
      return(
        <Container>
          <Button>{this.props.text}</Button>
        </Container>
      )
    }
}

export default ShareButton
