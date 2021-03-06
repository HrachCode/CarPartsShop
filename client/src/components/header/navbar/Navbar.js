import React,{Component} from 'react'
import './Navbar.css'
import './MediaNavbar.css'

import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom"



class Navbar extends Component{

    state = {
        navlink:[
            {name:'Home',link:'/'},{name:'About',link:'/about'},{name:'Men`s wear',link:'/mens'},
            {name:'Women`s wear',link:'/trucs'},{name:'Short Codes',link:'/codes'},{name:'Contact',link:'/contact'},
            {name:'Shop',link:'/shop'}
        ],
        mens:false,
        womens:false,
        codes:false,
        c:0,
        userProfile:'',
        bascket:this.props.shopProduct,
        shopProduct:'',
        btnIcons:false,
        btnC:false,
    };
    componentDidMount(){
        const token = localStorage.myusertoken

        if(token){
            const decoded = jwt_decode(token)
            !this.state.userProfile &&   this.setState({userProfile:decoded})

        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            this.setState({userProfile:nextProps.user})
        }
    }

    btnNavBar=()=>{
        this.setState({
            btnIcons:!this.state.btnIcons
        })
    }
    btnCartUs=()=>{
        this.setState({
            btnC:!this.state.btnC
        })
    }
    render() {
        return (
            <div className={'navall'}  onClick={this.closewindow}>
                <div className='navbars'>
                    <nav className={'navnav'}>
                        <ul className={'navul'}>
                            <div className="iconsManu" onClick={this.btnNavBar}>
                                <i className="fa fa-bars"></i>
                                {this.state.btnIcons?
                                    <div className="hoverNav">
                                        <li className={'navulli'}>
                                            <NavLink exact to={'/'} >Home</NavLink>
                                        </li>
                                        <li className={'navulli'}>
                                         http://localhost:3000/mens   <NavLink  to={'/about'} >About</NavLink>
                                        </li>
                                        <li  className={'limens1 navulli'}>
                                            <NavLink to={'/cars'} >Cars</NavLink>
                                            <div className={'menshover1'}>

                                            </div>
                                        </li>
                                        <li className={'liwomens1 navulli'}>
                                            <NavLink  to={'/trucs'} >Bus & Trucks</NavLink>
                                            <div className={'womenshover1'}>

                                            </div>
                                        </li>
                                        <li className={'navulli'}>
                                            <NavLink  to={'/contact'} >Contact</NavLink>
                                        </li>

                                    </div>
                                    :null}

http://localhost:3000/mens

                            </div>
                            <li className={'navulli noneLi'}>
                                <NavLink exact to={'/'} >Home</NavLink>
                            </li>
                            <li className={'navulli noneLi'}>
                                <NavLink  to={'/about'} >About</NavLink>
                            </li>
                            <li  className={'limens navulli noneLi'}>
                                <NavLink   to={'/cars'} >Cars</NavLink>
                                <div className={'menshover'}>

                                </div>
                            </li>
                            <li className={'liwomens navulli noneLi'}>
                                <NavLink   to={'/trucs'} >Bus & Trucks</NavLink>
                                <div className={'womenshover'}>

                                </div>
                            </li>
                            <li className={'navulli noneLi'}>
                                <NavLink   to={'/contact'} >Contact</NavLink>
                            </li>
                            {/*<div className={'shop shopCss'} onClick={this.props.shopOpen}>*/}
                            {/*    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>*/}
                            {/*</div>*/}
                                {this.state.userProfile !== ''?
                                    <div className={'user_profile'}>
                                        <div className="userIcons">
                                            <i className="fa fa-user" onClick={this.btnCartUs}></i>

                                                    <div className="cartUserr">
                                                        <h3>{this.state.userProfile.first_name}</h3>
                                                        <p>{this.state.userProfile.email}</p>
                                                        <NavLink to={'/my'} className={'your_profile'}>YOUR PROFILE</NavLink>
                                                        <div className="exitdiv">
                                                            <p onClick={()=> localStorage.removeItem('myusertoken')}><a href='/'>Exit</a></p>
                                                        </div>
                                                    </div>

                                        </div>
                                    </div>
                                    :null}

                        </ul>
                    </nav>


                </div>

                {this.props.shop ?
                    <div className={'cart'}>
                        {this.state.bascket.length === 0 ? 'Your shopping cart is empty': <div>
                            <ul>
                                {this.props.shopProduct.map((e, i) => {
                                    return(
                                        <li key={i}>
                                            <img src={`./img/${e.img}`} alt="shoose"/>
                                            <h4 className="title">{e.goods_name}</h4>

                                            <span>${e.price}</span>
                                            <span className="delete" onClick = {()=>this.props.deletItem(e._id)}>x</span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <NavLink className={'shopnav'} onClick={this.props.shopClose} to={'/shop'}>Go To Shop</NavLink>
                        </div> }

                        <button type="button" className="close" data-dismiss="modal" onClick={this.props.shopClose}>×</button>

                    </div>:null}
            </div>

        );
    }
}

const mapStateToProps = state => {

    return {
        magazine: state.magazine.initmagazine,
        shop: state.magazine.shop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shopOpen: () => {
            return dispatch({type: 'shopChange'})

        },
        shopClose: () =>{
            return dispatch({type: 'closeShop'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)