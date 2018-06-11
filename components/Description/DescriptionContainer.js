/* ----------------------------------------------
 * Container for the product information
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { SIZES } from '../../constants/DeviceWidth'

import Price from './Price'
import Promotions from './Promotions'
import Quantity from './Quantity'
import BuyButtonContainer from './BuyButtonContainer'
import Returns from './Returns'
import ShareContainer from './ShareContainer'
import ProductHighlights from './ProductHighlights'

const DescContainer = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  max-width: 300px;

  @media(max-width: ${SIZES.TABLET}) {
    order: 1;
  }
`


class DescriptionContainer extends Component {
    render () {
      return(
        <DescContainer>
          <Price offer={this.props.offer}></Price>
          <Promotions promos={this.props.promo}></Promotions>
          <Quantity></Quantity>
          <BuyButtonContainer channelCode={this.props.channelCode}></BuyButtonContainer>
          <Returns></Returns>
          <ShareContainer></ShareContainer>
          <ProductHighlights highlights={this.props.highlights}></ProductHighlights>
        </DescContainer>
      )
    }
}


export default DescriptionContainer
