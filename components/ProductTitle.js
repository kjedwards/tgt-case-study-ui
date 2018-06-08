import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { sizes } from '../constants/DeviceWidth'

const ImageTitle = styled.div`
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 10px;
  width: 80%;
`


export default class ProductTitle extends Component {
    render () {
        return (
            <ImageTitle>This is a placeholder title</ImageTitle>
        )
    }
}
