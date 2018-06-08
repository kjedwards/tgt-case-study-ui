/* ----------------------------------------------
 * Main application page
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react'
import styled from 'styled-components'

import ImageContainer from '../components/Image/ImageContainer'
import ReviewContainer from '../components/Review/ReviewContainer'
import DescriptionContainer from '../components/Description/DescriptionContainer'

import { SIZES } from '../constants/DeviceWidth'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 800px;
  max-width: 1600px;
  margin: 10px;
  justify-content: flex-start;

  @media(max-width: ${SIZES.TABLET}) {
    max-height: 10000px;
  }

  @media(max-width: ${SIZES.LAPTOP}) {
      max-width: 1200px;
  }

  @media(max-width: ${SIZES.DESKTOP}) {
      max-width: 1600px;
  }
`

class App extends Component {

    render () {
        return (
            <AppContainer>
              <ImageContainer></ImageContainer>
              <ReviewContainer></ReviewContainer>
              <DescriptionContainer></DescriptionContainer>
            </AppContainer>
        )
    }
}

export default App
