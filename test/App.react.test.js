import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

//Imported Components
import DescriptionContainer from '../components/Description/DescriptionContainer'
import ImageContainer from '../components/Image/ImageContainer'
import ReviewContainer from '../components/Review/ReviewContainer'

//Description Mocks
jest.mock('../components/Description/BuyButtonContainer', () => 'buy-button-container')
jest.mock('../components/Description/Price', () => 'price')
jest.mock('../components/Description/ProductHighlights', () => 'prouct-highlights')
jest.mock('../components/Description/Promotions', () => 'promotions')
jest.mock('../components/Description/Quantity', () => 'quantity')
jest.mock('../components/Description/Returns', () => 'returns')
jest.mock('../components/Description/ShareContainer', () => 'share-container')

//Image Mocks
jest.mock('../components/Image/ProductCarousel', () => 'product-carousel')
jest.mock('../components/Image/ProductImage', () => 'product-image')
jest.mock('../components/Image/ProductTitle', () => 'product-title')

//Review Mocks
jest.mock('../components/Review/ReviewSummary', () => 'review-summary')
jest.mock('../components/Review/ReviewTop', () => 'review-top')


describe('DescriptionContainer Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<DescriptionContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<DescriptionContainer />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('ImageContainer Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ImageContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ImageContainer />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('ReviewContainer Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ReviewContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ReviewContainer />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
