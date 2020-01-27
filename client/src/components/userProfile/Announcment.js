import React from 'react';
import './userProfile.scss'
import pic1 from '../../empty/emptydatark.jpg'

import CreateIcon from '@material-ui/icons/Create';
import SimpleModal from '../AdminPanel/material UI/Modal'

export default ({data,deletItem})=>{

    return(
        <div className={'ann'}>
            <div className={'your'}>
            {/*{data.img.length > 1 ? <img  src={`./img/${data.img[0]}`} alt=""/> : data.img.map((e,i)=>{*/}
            {/*            return(*/}
            {/*                <img key={i} onClick={()=>console.log(e)} src={`./img/${e}`} alt=""/>*/}
            {/*            )*/}
            {/*        })*/}
            {/*       }*/}
                {data.img.length > 1 ? <img src={`./img/${data.img[0]}`} alt=""/> : data.img.length === 0 ?
                    <img src={pic1} alt=""/> : data.img.length === 1 ? data.img.map((e,i)=>{
                            return(
                                <img key={i} onClick={()=>console.log(e)} src={`./img/${e}`} alt=""/>
                            )})
                        : null}
                <div className={'antitle'}>
                    <p >{data.carType} {data.carModel} {data.carMator} {data.carYear}</p>
                    <span>{data.textInformation}</span>
                </div>
                <button className={'btnedita aria'}><CreateIcon/></button>
                <SimpleModal deletItem={{id:data.articul,del:deletItem}}/>

            </div>
          
        </div>

    )
}