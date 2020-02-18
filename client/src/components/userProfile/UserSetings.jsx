
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
    },
    isloading:false,
     img:[],
     city:'',
     state:'',
     fileSelected:null,
     name:'',
     newpasseod:'',
     Password:'',
     address:'',
     Fonnumber:'',
     newpasseod:''
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
    console.log(this.state.newpasseod,this.state.Password);
    
    if(this.state.newpasseod !== this.state.Password)
         this.setState({errorMessages:{passError:true}})
  }else if('^(([\+]{1}[0-9]{1,3}[\ ]{1}[0-9]{1,2}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\ ]{1}[0-9]{4}[\ ]{1}[0-9]{4})|([0]{1}[0-9]{1}[\-]{1}[0-9]{4}[\-]{1}[0-9]{4})|([\(]{1}[0]{1}[0-9]{1}[\)]{1}[\ ]{1}[0-9]{4}([\ ]|[\-]){1}[0-9]{4})|([0-9]{4}([\ ]|[\-])?[0-9]{4})|([0]{1}[0-9]{3}[\ ]{1}[0-9]{3}[\ ]{1}[0-9]{3})|([0]{1}[0-9]{9})|([\(]{1}[0-9]{3}[\)]{1}[\ ]{1}[0-9]{3}[\-]{1}[0-9]{4})|([0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[\-]?[0-9]{3}([\/]|[\-]){1}[0-9]{3}[\-]{1}[0-9]{4})|([1]{1}[0-9]{9}[0-9]?)|([0-9]{3}[\.]{1}[0-9]{3}[\.]{1}[0-9]{4})|([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\.]|[\-]){1}[0-9]{4}(([\ ]?(x|ext|extension)?)([\ ]?[0-9]{3,4}))?)|([1]{1}[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}([\-]){1}[0-9]{4})|([\+]{1}[1]{1}[\ ]{1}[0-9]{3}[\.]{1}[0-9]{3}[\-]{1}[0-9]{4})|([\+]{1}[1]{1}[\ ]?[\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4}))$'){

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
    newpasseod:this.state.newpasseod


  }
  console.log(this.state.errorMessages);
  
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