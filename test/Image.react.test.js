import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

//Imported Components
import ProductImage from '../components/Image/ProductImage'
import ProductTitle from '../components/Image/ProductTitle'


describe('ProductImage Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ProductImage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ProductImage />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})

describe('ProductTitle Component', () => {
  it('RENDERER snapshot', () => {
    const tree = renderer.create(<ProductTitle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('ENZYME snapshot', () => {
    const tree = mount(<ProductTitle />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
