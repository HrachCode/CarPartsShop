import React from 'react';

const ImgLoad = (props) => {
 
    return (

        <div className="">
            <div className="ImgLoadInp">
            <label htmlFor="file-upload" className="custom-file-upload">
    <i className="fa fa-cloud-upload"></i> Custom Upload
</label>
            <input type="file" name="img" className="btn btn-outline-secondary custom-file-upload"
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

