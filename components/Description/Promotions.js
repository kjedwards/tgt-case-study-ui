/* ----------------------------------------------
 * Component displaying the promotions
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'

import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Container = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  color: red;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Promotion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 2px;
`

const Tag = styled.div`
  font-size: 10px;
  padding-right: 5px;
`

const Text = styled.div`
  font-size: 12px;
`


class Promotions extends Component {
    render () {
      return(
        <Container>
          <Promotion>
            <Tag><i className='fa fa-tag'/></Tag>
            <Text>Wow, what a deal!</Text>
          </Promotion>
          <Promotion>
            <Tag><i className='fa fa-tag'/></Tag>
            <Text>Wow, what a deal!</Text>
          </Promotion>
        </Container>
      )
    }
}


export default Promotions
