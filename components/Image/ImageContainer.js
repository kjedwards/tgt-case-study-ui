import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import ProductTitle from './ProductTitle'
import ProductImage from './ProductImage'
import ProductCarousel from './ProductCarousel'

import { sizes } from '../../constants/DeviceWidth'

const ImgContainer = styled.div`
  background-color: red;
  width: 40%;
  height: 500px;
  min-width: 400px;
  order: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media(max-width: ${sizes.laptop}) {
      max-width: 400px;
  }

  @media(max-width: ${sizes.desktop}) {
      max-width: 600px;
  }
`


class ImageContainer extends Component {
    render () {
      return(
        <ImgContainer>
          <ProductTitle></ProductTitle>
          <ProductImage></ProductImage>
          <ProductCarousel></ProductCarousel>
        </ImgContainer>
      )
    }
}


export default ImageContainer

//export default connect(mapStateToProps)(App)
