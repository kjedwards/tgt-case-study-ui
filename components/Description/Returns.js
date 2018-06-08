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
          <DescText>These are some instructions for returning merchandise.</DescText>
        </Container>
      )
    }
}

export default Returns
