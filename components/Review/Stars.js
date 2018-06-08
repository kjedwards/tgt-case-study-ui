/* ----------------------------------------------
 * Component to display the stars for a review
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Unchecked = styled.div`
  color: grey;
`

const Checked = styled.div`
  color: red;
`

class Stars extends Component {
    render () {
      return(
        <Checked>
          <i className='fa fa-star' />
          <i className='fa fa-star' />
          <i className='fa fa-star' />
          <i className='fa fa-star' />
          <i className='fa fa-star' />
        </Checked>
      )
    }
}


export default Stars
