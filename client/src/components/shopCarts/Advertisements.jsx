import React, { Component } from 'react';
import pic from '../../empty/emptydatark.jpg'
import './Advertisments.scss'

class Advertisements extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.product.reverse();
    this.state = {
      count: 2,
      defaultCount: 2,
    };
  }
  handleCount() {
    let count = this.state.defaultCount;
    count = count + this.state.count;
    this.setState({ count });
  }
  render() {
   
    const count = this.state.count;
    const showData = (item, index) => {
     return ((index < count) ?       
      <div key={index} className={'adver'}>
     <div className={'indiv'}>
                       {item.img.length > 1 ? <img src={`./img/${item.img[0]}`} alt=""/> : item.img.length === 0 ?
            <img src={pic} alt=""/> : item.img.length === 1 ? item.img.map((e,i)=>{
                  return(
                    <img key={i} onClick={()=>console.log(e)} src={`./img/${e}`} alt=""/>
                 )})
                : null}
        <div className={'mej'}>
           <div className={'adstitle'}>
              <p >{item.carType} {item.carModel} {item.carMator} {item.carYear}y.  {item.price}$ </p>

              <span>{item.textInformation}</span>

           </div>

        </div>

     </div>

  </div> : '');
    };

 return (
   <div className={'load_more'}>
     {this.data.map(showData)}
     <button  href="#" onClick={this.handleCount.bind(this)}>Load More</button>
   </div>
  );
 }
}
export default Advertisements


