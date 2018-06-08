/* ----------------------------------------------
 * Component to display the overall ratings
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const RvwTop = styled.div`
  background-color: grey;
  height: 50px;
  width: 100%;
`


class ReviewTop extends Component {
    render () {
      return(
        <RvwTop></RvwTop>
      )
    }
}


export default ReviewTop
