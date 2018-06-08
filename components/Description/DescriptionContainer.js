import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { sizes } from '../../constants/DeviceWidth'

import Price from './Price'
import Promotions from './Promotions'
import Quantity from './Quantity'
import BuyButtonContainer from './BuyButtonContainer'
import Returns from './Returns'
import ShareContainer from './ShareContainer'
import ProductHighlights from './ProductHighlights'

const DescContainer = styled.div`
  background-color: #d6def7;
  min-width: 400px;
  max-width: 500px;
  width: 50%;
  order: 2;
  display: flex;
  flex-direction: column;

  @media(max-width: ${sizes.tablet}) {
    order: 1;
  }
`


class DescriptionContainer extends Component {
    render () {
      return(
        <DescContainer>
          <Price></Price>
          <Promotions></Promotions>
          <Quantity></Quantity>
          <BuyButtonContainer></BuyButtonContainer>
          <Returns></Returns>
          <ShareContainer></ShareContainer>
          <ProductHighlights></ProductHighlights>
        </DescContainer>
      )
    }
}


export default DescriptionContainer