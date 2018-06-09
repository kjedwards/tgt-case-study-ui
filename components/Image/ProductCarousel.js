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
  width: 80%;
  height: 20%;
  margin-bottom: 20px;
  display: flex;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
`

export default class ProductCarousel extends Component {
  render () {
    return (
        <Carousel>

          {this.props.images.map((dataVal, i) =>
              <div key={i}>
                <Image src={dataVal.image} />
              </div>
          )}


        </Carousel>

    )
  }
}
