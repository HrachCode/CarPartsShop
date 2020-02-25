import React from 'react';
import PicturesWall from './material UI/UploadImg'
import { UploadField } from "@navjobs/upload";
import { Button, Input } from "antd";
import axios from 'axios'
const ImgLoad = (props) => {
  const upload = file => {
        const formData = new FormData();
        formData.append("file", file);
        return axios.post("/users/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      }

    const onImgSubmit = async (files) => {
        for (let i = 0; i < files.length; i++){
            const file = files[i];            
               await upload(file).then(data=>{
                   console.log(data);
                   
               })
              

        }
    }
     return (

        <div className="">
            <div className="ImgLoadInp">
            <UploadField
            onFiles={onImgSubmit}
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
              <PicturesWall />
            <input type="file"  name="img" className="btn btn-outline-secondary custom-file-upload"
             onChange={props.onChangeimg.onChangeimg} style={{width:"100%"}} multiple/>

           {props.onChangeimg.apdateProduct.err?<span style={{color:"red"}}>file dont loaded </span>
           :props.onChangeimg.apdateProduct.data?<span style={{color:"green"}}>file loaded sucsefuly</span>:null}


                <div>
                    <button style={{backgroundColor:'#FFAA00',color:'white', border:'none',borderRadius:'10px', fontSize:'18px',
                    fontWeight:'lighter',
                    padding:'5px 10px',textAlign:'center'}} type="button" onClick={props.onImgSubmit} className="btnimgload">send IMG</button>

                </div>
            </div>

        </div>

    );
}

export default ImgLoad;
