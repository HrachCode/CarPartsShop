import React from 'react'
import './Apart.scss'
import Slider from './slider/Awesome'
import axios from 'axios'
import Spiner from "../../components/Spiner/Spiner";


export default class Apart extends React.Component{
    state={
        product:'',
        loading:true,
        data:''
    }
        componentDidMount(){
             axios.post('productid',{id:this.props.match.params.aparts})
             .then(data=>{
                this.setState({product:data,loading:false})
                             
             })   
             window.scrollTo(0,0)
        }
    render() {
        if(this.state.product.data === undefined){
            console.log('undef')
        }else{
            console.log(this.state.product.data.product)
        }

        const {title, date, price, car, company, ordered} = this.props
        if(this.state.loading) {
            return  <Spiner />
        }
        return(
            <div>
                {this.props.match.aparts}
                <div className="container">
                    <div className="apart_general">
                        <div className="apart_details">
                            <div className="parts_title">
                                <h2>{this.state.product.data.product.carType} {this.state.product.data.product.carModel}
                                {this.state.product.data.product.carYear} {this.state.product.data.product.carMator}L.
                                {this.props.match.aparts}</h2>

                            </div>
                            <div className={'add_as_favorite'}>
                                <button><i className="fa fa-heart"></i>Add as favorite</button>
                                <button className={'add_note'}><i className="fa fa-sticky-note"></i>Add on note</button>
                                <span> {date} Today 12 : 46 </span>
                            </div>
                            <div className="slider">
                                <Slider img={this.state.product.data.product.img} />
                            </div>
                            <div className={'aoao'}>
                                <hr/>
                                <p>Description</p>
                                <hr/>
                                <p>{this.state.product.data.product.textInformation}</p>
                            </div>
                        </div>
                        <div className="apart_info">
                            <div className="price">
                                <h2>{this.state.product.data.product.price}$</h2>
                            </div>
                            <div className={'number'}>
                                <h4>{this.state.product.data.product.phone}</h4>
                            </div>

                            <div className="car_info">
                                <div className={'title'}>
                                    <b>{this.state.product.data.product.carType}</b>
                                    <p>{this.state.product.data.product.first_name}</p>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

