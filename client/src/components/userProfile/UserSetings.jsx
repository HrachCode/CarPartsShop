
import React, { Component } from 'react';
import { UploadField } from "@navjobs/upload";
import { Button, Input } from "antd";
import profilimg from './announcmentpic/emptydatark.jpg'
import {sendData} from '../UserFunctions'
import UserSetingForms from './UserSetingForms'
import Passubdate from './Passwordchaing'
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import axios from 'axios';
 class UserSetings extends Component{
   state = {
   
    isloading:false,
     img:[],
     city:'',
     state:'',
     fileSelected:null,
     name:'',
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

}
hendlClick = (e)=>{
  e.preventDefault()
 
  let img = null;
  let mail = null;
  if(this.state.img.length > 0){
    this.state.img.forEach(item=>{
      img = item;

    })
  }

  const userSetingsData = {
    first_name : this.state.name,
    newpassword: this.state.newpassword,
    Password : this.state.Password,
    address : this.state.address,
    phone : this.state.Fonnumber,
    profileimg : img,
    city:this.state.city,
    state:this.state.state,
    img:img,
    mail:this.props.user.user[0].email

  }
  if(false){
      axios.post('users/usersetingUbdate',{user:userSetingsData})
      console.log(userSetingsData,this.props.user);

  }

}
       render(){

        return (
          <div className="setingsWrap">
            <div className="addres">

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
              user = {this.props.user}/>

         </div>
            </div>
            <div className="pswrd">
              <Passubdate onChange={this.onChange}/>
            </div>

            </div>



      )

       }
}

export default UserSetings
