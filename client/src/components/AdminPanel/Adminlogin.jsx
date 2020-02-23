import React, { Component } from 'react';
import Particls from './material UI/Particlse'
import {sendData} from '../UserFunctions'

 class Adminlogin extends Component{
   state = {
     img:[],
     fileSelected:null
   }
   onChangeimg = e=> this.setState({fileSelected:e.target.files})
   setings = {
    onChangeimg:this.onChangeimg,
    apdateProduct:'',
    err:''
}
 onImgSubmit = (e)=>{
    
  this.setState({fileSelected:e}) 
 
   setTimeout(() => {
    if(this.state.fileSelected === null){
      return  this.setings.apdateProduct = 'null;'
    }
    const formData = new FormData()
    for (const key of Object.keys(this.state.fileSelected)) {
 
        formData.append('imgCollection', this.state.fileSelected[key])
    }
    console.log(formData);
    sendData('stok/imgDownload',formData,{ headers: {
    
      
      "Content-Type": "multipart/form-data"
    }})
        .then(respons=>{
           
            if(!respons.data.error){
                this.setings.apdateProduct = respons;
                this.setState({img:respons.data.fileName})
                
                
            }else{
                this.setings.apdateProduct ='null;'
                this.setState({img:[]})

            };
        }).catch(err=>{
        this.setings.apdateProduct = {err:err}
        this.setState({img:[]})
        console.log(err)})
   }, 500);

}
    
       render(){
        console.log( this.state.img);
        return (
          <div>
               
         <Particls />
          <div className="allImgWrap">
          {this.state.img.length?this.state.img.map(item=>{
            
            return <div className='imgWrap' key={item}>
              <img src={`./img/${item}`} alt="img"/>
            </div>
         
            
          }):null}
            </div>
         
          </div>
      )
  
       }
}

export default Adminlogin