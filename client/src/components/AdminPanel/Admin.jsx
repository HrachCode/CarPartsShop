import React, { Component } from 'react'
import Adminlogin from './Adminlogin'
import './admin.scss'
import uuid from 'uuidv4';
import Home from './Home'
import AddProduct from './AddProduct'
import LoginAdmin from './LoginAdmin'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
export default class Goods extends Component {
    state = {
      new_arrivals:false, 
      discont:false,
      productCotegory:'',
      goods_name: '',
        description: '',
        img: '',
        price: '',
        cotegory:'',
        productCountInSok:'',
      fileSelected:null,
      navigate:'home',
      navigation:[{id:1,text:'home'},{id:2,text:'add product'},{id:3,text:'static'}],
      adminISLogined:'',
      selectedId:null,
      } 
      onChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
          this.setState({ [name]: value })
        
      }
      onSubmit=(e)=> {
        e.preventDefault()
        axios.get('avds/getAll')
        .then(data=>{
          console.log(data);
          
        })
        
         
          }
          reset = ()=>{this.setings.apdateProduct  = ''; }
          swith= (state)=> this.setState({men_products:!this.state.men_products})
          discont=state=>  this.setState({discont:!this.state.discont})
          womenSwith=()=>  this.setState({women_products:!this.state.women_products})
          newAraivle=()=> {
            this.setState({new_arrivals:!this.state.new_arrivals});
           
          } 
          onChangeimg = e=> this.setState({fileSelected:e.target.files})
          navigate =(item) => {
                     this.setState({navigate: item.item.text,selectedId:item.item.id})
         
          }
          apdateProduct = product =>{
              this.setings.apdateProduct = product
             this.setState({navigate:'add product'})
             
          }
          admin = (admin)=>this.setState({adminISLogined:admin})
          setings = {
            onSubmit:this.onSubmit,
            onImgSubmit:this.onImgSubmit,
            onChangeimg:this.onChangeimg,
            onChange:this.onChange,
            state:this.state,
            swith:this.swith,
            womenSwith:this.womenSwith,
            newAraivle:this.newAraivle,
            apdateProduct:'',
            reset:this.reset,
            discont:this.discont
          }
    hendlClick = ()=>{
      localStorage.removeItem('itemtId')
      this.setState({})
      console.log('olla')
    }
    render() {
     
      let admin = this.state.adminISLogined.islogined;
           if(!admin){
        return <LoginAdmin admin={this.admin}/>
      }
     return(
     <div className="s">
      <div className="navPanel">
        <ul>{this.state.navigation.map((item,i)=>{
          let classes = ['list'];
          if (item.id === this.state.selectedId){
            classes.push('text-succsess')
          }
        return  <li key={i} className={classes.join(' ')}
                     onClick={()=>this.navigate({item},{i})}>{item.text}</li>
          })} 
        <li className={'navPanel'} onClick={this.props.adminExit}><NavLink to={'/'}>exit</NavLink></li>
          
        </ul>
      </div>
      {(this.state.navigate === 'home')?<Home apdateProduct={this.apdateProduct} />
      :(this.state.navigate === 'add product')?<AddProduct setings={this.setings} />:
      (this.state.navigate === 'static')?<Adminlogin />:null}
    
            </div>     
     )
}
}