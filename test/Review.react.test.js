import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

//Imported Components
import ConContainer from '../components/Review/ConContainer'
import ProContainer from '../components/Review/ProContainer'
import Review from '../components/Review/Review'
import ReviewHeader from '../components/Review/ReviewHeader'
import ReviewSummary from '../components/Review/ReviewSummary'
import Stars from '../components/Review/Stars'

//Mocks
jest.mock('../components/Review/ConContainer', () => 'con-container')
jest.mock('../components/Review/ProContainer', () => 'pro-container')
jest.mock('../components/Review/Review', () => 'review')
jest.mock('../components/Review/ReviewHeader', () => 'review-header')
jest.mock('../components/Review/Stars', () => 'stars')

describe('ConContainer Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ConContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ConContainer />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('ProContainer Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ProContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ProContainer />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Review Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<Review />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<Review />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Review Header Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ReviewHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ReviewHeader />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Review Summary Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<Review Summary />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<Review Summary />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Stars Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<Stars />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<Stars />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
