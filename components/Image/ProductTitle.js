/* ----------------------------------------------
 * Title of product
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

const ImageTitle = styled.div`
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 10px;
  width: 80%;
`


export default class ProductTitle extends Component {
    render () {
        return (
            <ImageTitle>This is a placeholder title</ImageTitle>
        )
    }
}
