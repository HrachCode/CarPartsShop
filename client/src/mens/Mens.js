import React, {Component} from 'react'
import Wear from "../wear/Wear";
import './Mens.scss'
import {GetShopBascket, setProduct} from '../components/UserFunctions'
import FilterWear from "../wear/filterwear/FilterWear";
import axios from 'axios'
import Spiner from '../components/Spiner/Spiner'
import QuickView from "../components/quickview/QuickView";
import {connect} from "react-redux";
import pic1 from '../components/slider/slideimg/banner1.jpg'
import pic2 from '../components/slider/slideimg/banner2.jpg'
import pic3 from '../components/slider/slideimg/banner4.jpg'
import pic4 from '../components/slider/slideimg/banner5.jpg'
import pic from '../empty/emptydatark.jpg'
import {withRouter} from 'react-router-dom'


 class Mens extends Component {
    state = {
        wearTitle: 'CARS',

        products: [],
        loading: true,
        QuickCards: '',
        menswear: 'Mens',
        gender: 'mens'

    }
    
    componentDidMount(){
        setProduct(`stok/menproduct`,"GET")
            .then(body =>{


              
                
                this.setState({products:body},)
                this.getProduct(body)

            })
            .catch(err => console.log(err))
    }

    getProduct = body => this.setState({products:body, loading:false})
     BtnQuickView=(i)=>{
               this.setState({QuickCards:i})
     }
     onSubmit= (e)=>{
         e.preventDefault();

         const getShopBascket = new GetShopBascket();
         getShopBascket.cart({id:e.target.name},'stok/cartVew')
             .then(body =>{
                 const setitem = this.props.setitem;
                 setitem(body)
             })
             .catch(err => console.log(err))

     };
     showaparts = item => {
        console.log(this.props.history);
        
        this.props.history.push(`/cars/${item._id}`)
    }
    findAndFilter = (data)=>{
        if(!data.carType){
          return  alert('chois a Car Name ')
        }else {
            return axios.post('filter/productid',data)
            .then(data=>{
                if(data.data.length === 0){
                    return alert('not finde')
                }
            
               this.setState({products:data.data})
                
            }).catch(err=>{
                console.log(err);
                
            })   
        }         
                
    }

    render() {
     
      
        if(this.state.loading) {
            return <Spiner />
        }

        const {wearTitle} = this.state
        return(
            <div>
                <Wear wear={wearTitle} />
                <FilterWear imgone={pic1}
                            imgtwo={pic2}
                            imgthree={pic3}
                            imgfour={pic4}
                            getProduct={this.getProduct}
                            mensorw={this.state.menswear}
                            gender={this.state.gender}
                            colect={'MEN\'S'}
                            lower={'Lower Price'}
                            track={'Track Your Item'}
                            bigger={'Bigger Choice'}
                            colors={'More Colors to Choose'}
                            backmoney={'Money Back Guaranteed'}
                            findAndFilter= {this.findAndFilter}

                />
                <div className="container">
                    <div className={'cardwears'}>
                        <QuickView setitem = {this.props.setitem} BtnQuickView={this.BtnQuickView} QuickCards={this.state.QuickCards}/>
                        <div className={'shopCartscontainer'}>
                             {/* <Advertisements product={this.state.products.purch}/> */}
                            <div className={'carts'}>
                               {this.state.products.map((item,index)=>{

                                    return (
                                        <div key={index} className={'adver'}  onClick={this.showaparts.bind(this, item)}>
                                        <div className={'indiv'}>
                                                          {item.img.length > 1 ? <img src={`./img/${item.img[0]}`} alt=""/> : item.img.length === 0 ?
                                               <img src={pic} alt=""/> : item.img.length === 1 ? item.img.map((e,i)=>{
                                                     return(
                                                       <img key={i} onClick={()=>console.log(e)} src={`./img/${e}`} alt=""/>
                                                    )})
                                                   : null}
                                           <div className={'mej'}>
                                              <div className={'adstitle'}>
                                                  {console.log(item)}
                                                 <p >{item.carType} {item.carModel} {item.carMator} {item.carYear}y.  {item.price}$ </p>
                                                            <h3 className="userData">   {item.email}      {item.first_name}</h3>
                                   
                                                 <span>{item.textInformation}</span>
                                   
                                              </div>
                                   
                                           </div>
                                   
                                        </div>
                                   
                                     </div>

                                    )
                                })}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

        )}

}

const mapStateToProps = state => {
    return {
        magazine: state.magazine.initmagazine,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shopOpen: () => {
            dispatch({type: 'shopChange'})
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mens))
