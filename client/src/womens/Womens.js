import React, { Component } from "react"
import {GetShopBascket, setProduct} from '../components/UserFunctions'
import Wear from "../wear/Wear";
import FilterWear from "../wear/filterwear/FilterWear";
import Spiner from "../components/Spiner/Spiner";
import QuickView from "../components/quickview/QuickView";
import {connect} from "react-redux";
import pic1 from '../components/slider/slideimg/banner1.jpg'
import pic2 from '../components/slider/slideimg/banner2.jpg'
import pic3 from '../components/slider/slideimg/banner4.jpg'
import pic4 from '../components/slider/slideimg/banner5.jpg'
import {withRouter} from 'react-router-dom'
import Apart from "../contact/apart/Apart";
import pic from '../empty/emptydatark.jpg'




class Womens extends Component {

    state = {
        wearTitle: 'BUS & TRUCKS',
        products: [],
        loading: true,
        QuickCards:'',
        womenswear: 'Womens',
        gender: 'womens'
    }
    componentDidMount(){
        setProduct(`stok/womenproduct`,"GET")
            .then(body =>{
                this.setState({products:body})
                this.getProduct(body)

            })
            .catch(err => console.log(err))
    }
    getProduct = body => this.setState({products:body, loading:false})

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

    BtnQuickView=(i)=>{
       
        this.setState({QuickCards:i})
    }


    showaparts = item => {
        console.log(this.props.history);
        
        this.props.history.push(`/womens/${item._id}`)
    }
    render() {
        if(this.state.loading) {
            return  <Spiner />
        }

        return(
            <div>
                <Wear wear={'Womens Wear'} />
                <FilterWear imgone={pic1}
                            imgtwo={pic2}
                            imgthree={pic3}
                            imgfour={pic4}
                            mensorw={this.state.womenswear}
                            gender={this.state.gender}
                            colect={'WOMEN\'S'}
                            getProduct = {this.getProduct}
                            lower={'Modern'}
                            track={'Favorite'}
                            bigger={'Bigger Choice'}
                            colors={'More Colors to Choose'}
                            backmoney={'Money Back Guaranteed'}
                />
                <div className="container">
                    <div className={'cardwears'}>
                        <QuickView setitem = {this.props.setitem} BtnQuickView={this.BtnQuickView} QuickCards={this.state.QuickCards}/>
                        <div className={'shopCartscontainer'}>
                            <div className={'carts'}>
                                {this.state.products.map((item,index)=>{
                                    return (
                                        <div key={index} className={'adver'} onClick={this.showaparts.bind(this, item)} >
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
                                   
                                     </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Womens))