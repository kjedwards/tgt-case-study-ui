/* ----------------------------------------------
 * Carousel component
 *
 * Author: Kaylee Edwards (z0027hd)
 * Last Modified: 06/08/2018
 * Last Modified By: Kaylee Edwards (z0027hd)
 * --------------------------------------------*/

import React, {Component} from 'react';
import styled, {css} from 'styled-components'
import 'font-awesome/css/font-awesome.min.css'

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 210px;
`

const Carousel = styled.div`
  position: relative;
  width: 350px;
  height: 100px;
`

const Image = styled.img`
  width: 80px;
  height: 80px;
`

const Slides = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
`

const Slide = styled.li`
  margin-right: auto;
  margin-left: auto;
  display: none;
  max-width: 900px;
  list-style-type: none;
  text-align: center;
`

const Content = styled.div`
  margin-bottom: 19px;
`

const Arrow = styled.a`
  position: absolute;
  top: 50%;
  display: block;
  color: #111;
  cursor: pointer;
  opacity: .75;
  transform: translateY(-50%);
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: .5;
  }
`

//special styles
var currentSlide = {
    display: 'block'
}

var notCurrentSlide = {
    display: 'none'
}

var left = {
    left: '0'
}

var right = {
  right: '0'
}


class ProductCarousel extends Component {
  constructor(props) {
    super(props)

    this.goToPrevSlide = this.prevSlide.bind(this)
    this.goToNextSlide = this.nextSlide.bind(this)

    this.state = {
      currentIndex: 0
    };
  }

  //Decrement current index- loop if needed
  prevSlide(e) {
    e.preventDefault()
    let index = this.state.currentIndex
    let slidesLength = this.props.images.length

    if (index < 1) {
      index = slidesLength
    }

    --index;

    this.setState({
      currentIndex: index
    });
  }

  //Increment the current index - loop if needed
  nextSlide(e) {
    e.preventDefault()

    let index = this.state.currentIndex
    let slidesLength = slides.length - 1

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      currentIndex: index
    });
  }

  render () {
    return (
        <CarouselContainer>
          <Carousel>
            <LeftArrow onClick={e => this.prevSlide(e)}>
                <i className='fa fa-chevron-left' />
            </LeftArrow>
            <Slides>
                {this.props.images.map((dataVal, i) =>
                      <CarouselSlide  key={i}
                                      index={i}
                                      activeIndex={this.state.currentIndex}
                                      length={this.props.images.length}
                                      slide={dataVal}>
                      </CarouselSlide>
                )}
            </Slides>
            <RightArrow onClick={e => this.prevSlide(e)}>
                <i className='fa fa-chevron-right' />
            </RightArrow>
          </Carousel>
        </CarouselContainer>

    )
  }
}

class LeftArrow extends Component {
  render() {
    return (
      <div>
        <Arrow onClick={this.props.onClick} style={left}>
          <span className="fa fa-chevron-left" />
        </Arrow>
      </div>
    );
  }
}

class RightArrow extends Component {
  render() {
    return (
      <div>
        <Arrow onClick={this.props.onClick} style={right}>
          <span className="fa fa-chevron-right" />
        </Arrow>
      </div>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <Slide
        style={ this.props.index == this.props.activeIndex
                  || this.props.index == this.props.activeIndex - 1
                  || this.props.index == this.props.activeIndex + 1
                  || (this.props.activeIndex == 0 && this.props.index == this.props.length - 1)
                  || (this.props.activeIndex == this.props.length - 1 && this.props.index == 0)
            ? currentSlide
            : notCurrentSlide
        }>
        <Content>
          <Image src={this.props.slide.image}>

          </Image>
        </Content>
      </Slide>
    );
  }
}

export default ProductCarousel
