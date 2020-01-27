import React from 'react';
import './Middle.css'
import './MediaMiddle.scss'
import img from './middleimg/mid.jpg'

export default ()=>{
    return(
        <div className={'midall'}>

            <div className={'midimgdiv'}>
                <img src={img} alt=""/>
            </div>

            <div className={'midtextdiv'}>
                <div className={'midtxt'}>
                    <h3>You Can Add Your <span>Advertisement</span> Here</h3>
                    <p className={'midtxtp'}>Suspendisse varius turpis efficitur erat laoreet dapibus.
                        Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet illo
                        inventore ipsa iusto molestiae necessitatibus recusandae
                        temporibus vitae, voluptate! Asperiores aut consequuntur distinctio, eius laboriosam quam suscipit veritatis vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eveniet illo
                        inventore ipsa iusto molestiae necessitatibus recusandae
                        temporibus vitae, voluptate! Asperiores aut consequuntur distinctio, eius laboriosam quam suscipit veritatis vitae.
                    </p>
                </div>
            </div>

        </div>
    )
}