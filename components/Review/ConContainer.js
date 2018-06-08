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
          <Header>Con</Header>
          <Content>most helpful 1-2 star review</Content>
        </Container>
      )
    }
}


export default ConContainer
