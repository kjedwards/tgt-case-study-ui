import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import { sizes } from '../constants/DeviceWidth'

const Image = styled.div`
  background-color: black;
  width: 75%;
  height: 60%;

`


export default class ProductImage extends Component {
    render () {
        return (
            <Image></Image>
        )
    }
}
