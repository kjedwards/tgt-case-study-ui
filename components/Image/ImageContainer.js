/* ----------------------------------------------
 * Component to display all images and title
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProductTitle from './ProductTitle'
import ProductImage from './ProductImage'
import ProductCarousel from './ProductCarousel'

import { SIZES } from '../../constants/DeviceWidth'

//Styles
const ImgContainer = styled.div`
  width: 40%;
  height: 500px;
  min-width: 400px;
  order: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media(max-width: ${SIZES.LAPTOP}) {
      max-width: 400px;
  }

  @media(max-width: ${SIZES.DESKTOP}) {
      max-width: 600px;
  }
`

//Component
class ImageContainer extends Component {
  //Set initial values
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <ImgContainer>
        <ProductTitle title={this.props.title}></ProductTitle>
        <ProductImage imageUrl={this.props.mainImage}></ProductImage>
        <ProductCarousel images={this.props.altImages}></ProductCarousel>
      </ImgContainer>
    )
  }
}


export default ImageContainer
