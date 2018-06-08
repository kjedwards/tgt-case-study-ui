import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`

`

const Button = styled.button`
  background-color: lightgrey;
  font-size: 9px;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 3px;
  border: 0px;
`

class ShareButton extends Component {
    render () {
      return(
        <Container>
          <Button>ADD TO REGISTRY</Button>
        </Container>
      )
    }
}

export default ShareButton
