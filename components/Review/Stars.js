/* ----------------------------------------------
 * Component to display the stars for a review
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import 'font-awesome/css/font-awesome.min.css'

const Container = styled.div`
  display: flex;
`

const Unchecked = styled.div`
  color: grey;
`

const Checked = styled.div`
  color: red;
`

class Stars extends Component {

  constructor(props) {
    super(props)
  }

    render () {
      //Set up array of checked stars
      var checked = [], i = 0, len = this.props.rating;
      while (++i <= len) checked.push(i);

      //Set up array of unchecked stars
      var unchecked = [], i = 0, len = 5 - this.props.rating;
      while (++i <= len) unchecked.push(i);

      return(
        <Container>
          <Checked>
            {checked.map((x, i) =>
              <i className='fa fa-star' key={i} />
            )}
          </Checked>
          <Unchecked>
            {unchecked.map((x, i) =>
              <i className='fa fa-star' key={i} />
            )}
          </Unchecked>
        </Container>
      )
    }
}


export default Stars
