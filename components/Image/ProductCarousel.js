/* ----------------------------------------------
 * Carousel component
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'


const Carousel = styled.div`
  background-color: black;
  width: 80%;
  height: 20%;
  margin-bottom: 20px;
`


export default class ProductCarousel extends Component {
    render () {
        return (
            <Carousel></Carousel>
        )
    }
}
