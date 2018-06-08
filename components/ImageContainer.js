import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import ProductTitle from './ProductTitle'
import ProductImage from './ProductImage'
import ProductCarousel from './ProductCarousel'

const ImgContainer = styled.div`
  background-color: red;
  height: 500px;
  width: 40%;
  min-width: 400px;
  order: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
