import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import ShareButton from './ShareButton'

const Container = styled.div`
  display: flex;
  margin: 10px 0px;
`


class ShareContainer extends Component {
    render () {
      return(
        <Container>
          <ShareButton></ShareButton>
          <ShareButton></ShareButton>
          <ShareButton></ShareButton>
        </Container>
      )
    }
}

export default ShareContainer
