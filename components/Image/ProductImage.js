/* ----------------------------------------------
 * Main product image
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'


const ImageCont = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60%;
`

const Image = styled.img`
  display: block;
  max-width: 70%;
  max-height: 100%;
`


export default class ProductImage extends Component {
    render () {
        return (
            <ImageCont>
                <Image src={this.props.imageUrl}></Image>
            </ImageCont>
        )
    }
}
