import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Awesome.scss'
import pic from '../../../empty/emptydatark.jpg'

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={true} className={'carouselnik'}>
               {this.props.img.length === 0 ?
               <div>
                   <img src={pic} alt=""/>
               </div> : this.props.img.lenght === 1 ?
                       <div>
                            <img src={this.props.img[0]} alt=""/>
                       </div> :

                       this.props.img.map((e,i)=>{
                           return(
                               <div key={i}>
                                   <img src={`/img/${e}`} alt=""/>
                               </div>
                           )
                       })
               }
            </Carousel>
        );
    }
}