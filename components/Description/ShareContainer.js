/* ----------------------------------------------
 * Component to contain Registry, List, and Gift buttons
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

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
