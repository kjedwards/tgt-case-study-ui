import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-right: 5px;
`

const Button = styled.button`
  background-color: red;
  padding: 5px 20px;
  color: white;
  border-radius: 6px;
  border: 0px;
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
          <Button>PICK UP IN STORE</Button>
          <FindStore>find in a store</FindStore>
        </Container>
      )
    }
}

export default BuyButton
