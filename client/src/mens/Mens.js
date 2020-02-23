import React, {Component} from 'react'
import Wear from "../wear/Wear";
import './Mens.scss'
import {GetShopBascket, setProduct} from '../components/UserFunctions'
import FilterWear from "../wear/filterwear/FilterWear";
import axios from 'axios'
import Pagination from '../components/AdminPanel/material UI/Pagination'
import Spiner from '../components/Spiner/Spiner'
import QuickView from "../components/quickview/QuickView";
import {connect} from "react-redux";
import pic1 from '../components/slider/slideimg/banner1.jpg'
import pic2 from '../components/slider/slideimg/banner2.jpg'
import pic3 from '../components/slider/slideimg/banner4.jpg'
import pic4 from '../components/slider/slideimg/banner5.jpg'
import {withRouter} from 'react-router-dom'


 class Mens extends Component {
    state = {
        wearTitle: 'CARS',
        loading:true,
        products: [],
        loading: true,
        QuickCards: '',
        menswear: 'Mens',
        gender: 'mens'

    }

    componentDidMount(){
        setProduct(`stok/menproduct`,"GET")
            .then(body =>{
                this.setState({products:body.reverse()},)
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
    bigFilter = data => {
       if(!data.data.message){

        this.setState({products:data.data.parts})
       
      }else{
        alert(data.data.message)
      }

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
                console.log(err)

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
                            findAndFilter= {this.findAndFilter
                            }
                            bigFilter = {this.bigFilter}

                />
                <div className="container">
                    <div className={'cardwears'}>
                        <QuickView setitem = {this.props.setitem} BtnQuickView={this.BtnQuickView} QuickCards={this.state.QuickCards}/>
                        <div className={'shopCartscontainer'}>
                           
                            <div className={'carts'}>
                               
                                <Pagination arr={this.state.products} showaparts={this.showaparts}/>
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
