import React, {Component} from 'react'
import styled from 'styled-components'

import ImageContainer from '../components/ImageContainer'
import ReviewContainer from '../components/ReviewContainer'
import DescriptionContainer from '../components/DescriptionContainer'

import { sizes } from '../constants/DeviceWidth'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 800px;
  max-width: 100vw;
  margin: 10px;
  justify-content: flex-start;

  @media(max-width: ${sizes.mobileLarge}) {
    max-height: 10000px;
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
