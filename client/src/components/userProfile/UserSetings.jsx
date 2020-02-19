
import React, { Component } from 'react';
import { UploadField } from "@navjobs/upload";
import { Button, Input } from "antd";
import profilimg from './announcmentpic/emptydatark.jpg'
import {sendData} from '../UserFunctions'
import UserSetingForms from './UserSetingForms'
import 'antd/dist/antd.css';
import { Spin } from 'antd';
 class UserSetings extends Component{
   state = {
    errorMessages:{
      passError:false,
      foneError:false
    },
    isloading:false,
     img:[],
     city:'',
     state:'',
     fileSelected:null,
     name:'',
     newpassword:'',
     Password:'',
     address:'',
     Fonnumber:'',

   }
   onChangeimg = e=> this.setState({fileSelected:e.target.files})
   setings = {
    onChangeimg:this.onChangeimg,
    apdateProduct:'',
    err:''
}
 onImgSubmit = (e)=>{
 
  this.setState({fileSelected:e,isloading:true}) 
 
   setTimeout(() => {
    if(this.state.fileSelected === null){
      return  this.setings.apdateProduct = 'null;'
    }
    const formData = new FormData()
    for (const key of Object.keys(this.state.fileSelected)) {
 
        formData.append('imgCollection', this.state.fileSelected[key])
    }
   
    sendData('stok/imgDownload',formData,{ headers: {
      "Content-Type": "multipart/form-data"
    }})
        .then(respons=>{
           
            if(!respons.data.error){
                this.setings.apdateProduct = respons;
                this.setState({img:respons.data.fileName,isloading:false})
                
                
            }else{
                this.setings.apdateProduct ='null;'
                this.setState({img:[],isloading:false})

            };
        }).catch(err=>{
        this.setings.apdateProduct = {err:err}
        this.setState({img:[]})
        console.log(err)})
   }, 500);

}
onChange = (e)=> {
  const name = e.target.name;
  const value = e.target.value;
    this.setState({ [name]: value })
  console.log();
  
}
hendlClick = (e)=>{
  e.preventDefault()
  if(this.state.newpasseod !== ''){

    
    if(this.state.newpasseod !== this.state.Password){
         this.setState({errorMessages:{passError:true}})
      return
    }
      if(!parseInt(this.state.Fonnumber) || this.state.Fonnumber.length === 8 ){
          console.log(this.state.Fonnumber)
          this.setState({errorMessages:{passError:false,foneError:true}})
          return
      }else{
          this.setState({errorMessages:{passError:false,foneError:false}})
      }
  }else{
      this.setState({errorMessages:{passError:true}})
  }


  let img = null;
  if(this.state.img.length > 0){
    this.state.img.forEach(item=>{
      img = item;
      
    })
  }
  const userSetingsData = {
    name : this.state.name,
    newpasseod: this.state.email,
    Password : this.state.Password,
    address : this.state.address,
    Fonnumber : this.state.Fonnumber,
    img : img,
    sity:this.state.city,
    state:this.state.state,

  }
  if(!this.state.errorMessages.foneError && !this.state.errorMessages.passError){
      console.log(userSetingsData);
  }
  
}
    
       render(){
      
        return (
          <div className="setingsWrap">
        
          <div id="profileImg">
         {!this.state.isloading?<div>{this.state.img.length === 0? <img src={profilimg} alt="img"/>:this.state.img.map(item=>{
            
            return  <img key={item} src={`./img/${item}`} alt="img"/>          
          })}</div>:<div id="imgid"><Spin size="large"/></div>}
          
          <div className="desc">
            <span>Upload a img</span>
            <UploadField
            onFiles={this.onImgSubmit}
            containerProps={{
              className: "chat-input__actions-upload-btn"
            }}
            uploadProps={{
              accept: ".jpg,.jpeg,.png,.gif,.bmp",
              multiple: "multiple"
            }}
          >
            <Button type="link" shape="circle" icon="camera" className="imgbtn"/>
          </UploadField>
          </div>
          </div>
         <div className="profilesetingsForms">
         <UserSetingForms onChange={this.onChange} hendlClick = {this.hendlClick}
              errorMessages={this.state.errorMessages} user = {this.props.user}/> 
         </div>
            </div>
         
         
      )
  
       }
}

export default UserSetings