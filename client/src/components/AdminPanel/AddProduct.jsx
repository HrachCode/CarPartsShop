import React, { Component } from 'react'
import FormWrap from './FormWrap'

class AddProduct extends Component {
    
   render(){
  console.log();
    return (
        <div className={'AddProd'}>
        <form onSubmit={this.props.setings.onSubmit} >


             <div className="FW1">

                 <div className={'SelCom2'}>
                     <FormWrap onChange={this.props.setings.onChange} apdeitProduct = {this.props.setings.apdateProduct} />
                 </div>

              </div>

               </form>
        </div>
    );
   }
}

export default AddProduct;
