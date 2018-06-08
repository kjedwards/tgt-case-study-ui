import React, {Component} from 'react'
import styled from 'styled-components'

import ImageContainer from '../components/Image/ImageContainer'
import ReviewContainer from '../components/Review/ReviewContainer'
import DescriptionContainer from '../components/Description/DescriptionContainer'

import { sizes } from '../constants/DeviceWidth'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 800px;
  max-width: 1600px;
  margin: 10px;
  justify-content: flex-start;

  @media(max-width: ${sizes.tablet}) {
    max-height: 10000px;
  }

  @media(max-width: ${sizes.laptop}) {
      max-width: 1200px;
  }

  @media(max-width: ${sizes.desktop}) {
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
