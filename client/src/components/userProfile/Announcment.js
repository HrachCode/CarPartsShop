import React from 'react';
import './userProfile.scss'
import pic1 from '../../empty/emptydatark.jpg'
import {withRouter} from 'react-router-dom'


import CreateIcon from '@material-ui/icons/Create';
import SimpleModal from '../AdminPanel/material UI/Modal'

const Announcment = (  props) =>{
    // showaparts = item => {
    //     console.log(this.props.history);
        
    //     props.history.push(`/trucs/${item._id}`)
    // }
    const myparts = () => {
        // props.history.push(`/my/${props.id}`)
    }

    return(
        <div className={'ann'}>
            <div className={'your'}  onClick={myparts}>
                         {props.data.img.length > 1 ? <img src={`./img/${props.data.img[0]}`} alt=""/> : props.data.img.length === 0 ?
                    <img src={pic1} alt=""/> : props.data.img.length === 1 ? props.data.img.map((e,i)=>{
                            return(
                                <img key={props.i} onClick={()=>console.log(e)} src={`./img/${props.e}`} alt=""/>
                            )})
                        : null}
                <div className={'antitle'}>
                    <p >{props.data.carType} {props.data.carModel} {props.data.carMator} {props.data.carYear}</p>
                    <span>{props.data.textInformation}</span>
                </div>
                <button className={'btnedita aria'}><CreateIcon/></button>
                <SimpleModal deletItem={{id:props.data.articul,del:props.deletItem}}/>

            </div>
          
        </div>

    )
}

export default withRouter(Announcment)