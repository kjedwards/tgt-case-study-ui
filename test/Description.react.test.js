import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

//Imported Components
import BuyButton from '../components/Description/BuyButton'
import BuyButtonContainer from '../components/Description/BuyButtonContainer'
import DescriptionContainer from '../components/Description/DescriptionContainer'
import Price from '../components/Description/Price'
import ProductHighlights from '../components/Description/ProductHighlights'
import Promotions from '../components/Description/Promotions'
import Quantity from '../components/Description/Quantity'
import Returns from '../components/Description/Returns'
import ShareButton from '../components/Description/ShareButton'
import ShareContainer from '../components/Description/ShareContainer'

//Mocks
jest.mock('../components/Description/BuyButton', () => 'buy-button')
jest.mock('../components/Description/Price', () => 'price')
jest.mock('../components/Description/ProductHighlights', () => 'prouct-highlights')
jest.mock('../components/Description/Promotions', () => 'promotions')
jest.mock('../components/Description/Quantity', () => 'quantity')
jest.mock('../components/Description/Returns', () => 'returns')
jest.mock('../components/Description/ShareButton', () => 'share-button')

describe('BuyButton Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<BuyButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<BuyButton />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('BuyButtonContainer Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<BuyButtonContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<BuyButtonContainer />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Price Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<Price />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<Price />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Product Highlights Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ProductHighlights />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ProductHighlights />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Promotions Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<Promotions />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<Promotions />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Quantity Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<Quantity />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<Quantity />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('Returns Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<Returns />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<Returns />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('ShareButton Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ShareButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ShareButton />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('ShareContainer Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ShareContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ShareContainer />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
