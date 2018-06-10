/* ----------------------------------------------
 * Main application page
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'

import ImageContainer from '../components/Image/ImageContainer'
import ReviewContainer from '../components/Review/ReviewContainer'
import DescriptionContainer from '../components/Description/DescriptionContainer'

import { SIZES } from '../constants/DeviceWidth'

import Store from '../store'

import { getImages } from '../actions/ImagesActionCreator'
import { getMiscAttr } from '../actions/MiscAttrActionCreator'
import { getOverallReview } from '../actions/OverallReviewActionCreator'
import { getPros } from '../actions/ProsActionCreator'
import { getCons } from '../actions/ConsActionCreator'


const store = Store()

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 900px;
  max-width: 1600px;
  margin: 10px;
  justify-content: flex-start;
  font-family: sans-serif;

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
const mapStateToProps = (state) => {
  return {
    store: store,
    mainImage: state.images.mainImage,
    alternateImages: state.images.alternateImages,
    title: state.misc.title,
    overallRating: state.overall,
    pro: state.pro,
    con: state.con
  }
}

//Map actions to props
const mapDispatchToProps = function(dispatch) {
  return {
    getImages: bindActionCreators(getImages, dispatch),
    getMiscAttr: bindActionCreators(getMiscAttr, dispatch),
    getOverallReview: bindActionCreators(getOverallReview, dispatch),
    getPros: bindActionCreators(getPros, dispatch),
    getCons: bindActionCreators(getCons, dispatch)
  }
}

class App extends Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
      this.props.getImages()
      this.props.getMiscAttr()
      this.props.getOverallReview()
      this.props.getPros()
      this.props.getCons()
    }


    render () {
      console.log(this.props)
        return (
          <Provider store={store}>
          <AppContainer>
            <ImageContainer mainImage={this.props.mainImage.image}
                            altImages={this.props.alternateImages}
                            title={this.props.title}>
            </ImageContainer>
            <ReviewContainer  overallRating={this.props.overallRating}
                              pro={this.props.pro}
                              con = {this.props.con}>
            </ReviewContainer>
            <DescriptionContainer></DescriptionContainer>
          </AppContainer>
        </Provider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
