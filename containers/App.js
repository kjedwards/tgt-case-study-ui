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
import { getOffers } from '../actions/OffersActionCreator'
import { getPromotions } from '../actions/PromotionsActionCreator'
import { getItemDesc } from '../actions/ItemDescActionCreator'


const store = Store()

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 900px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  font-family: sans-serif;

  @media(max-width: ${SIZES.TABLET}) {
    max-height: 10000px;
  }

  @media(max-width: ${SIZES.MOBILE_LARGE}) {
      max-width: 500px;
  }
`
const mapStateToProps = (state) => {
  return {
    store: store,
    mainImage: state.images.mainImage,
    alternateImages: state.images.alternateImages,
    title: state.misc.title,
    channelCode: state.misc.purchasingChannelCode,
    overallRating: state.overall,
    pro: state.pro,
    con: state.con,
    offer: state.offers,
    promos: state.promos,
    highlights: state.desc.highlights
  }
}

//Map actions to props
const mapDispatchToProps = function(dispatch) {
  return {
    getImages: bindActionCreators(getImages, dispatch),
    getMiscAttr: bindActionCreators(getMiscAttr, dispatch),
    getOverallReview: bindActionCreators(getOverallReview, dispatch),
    getPros: bindActionCreators(getPros, dispatch),
    getCons: bindActionCreators(getCons, dispatch),
    getOffers: bindActionCreators(getOffers, dispatch),
    getPromotions: bindActionCreators(getPromotions, dispatch),
    getItemDesc: bindActionCreators(getItemDesc, dispatch)
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
      this.props.getOffers()
      this.props.getPromotions()
      this.props.getItemDesc()
    }


    render () {
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
            <DescriptionContainer offer={this.props.offer}
                                  promo={this.props.promos}
                                  channelCode={this.props.channelCode}
                                  highlights={this.props.highlights}>

            </DescriptionContainer>
          </AppContainer>
        </Provider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
