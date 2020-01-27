import React from 'react';
import {NavLink} from 'react-router-dom'
import './MediaHeaderBottom.scss'
import './HeaderBottom.css'

export default ()=>{
    return(
        <div className={'headB'}>
            <div className={'searchform'}>
                <h2><span>w</span>elcome to</h2>
            </div>
            <div className={'logo'}>
                <h1>
                    <NavLink to={'/'} exact>
                        <span className={'e'}>CAR PARTS</span>

                        <i className="fa fa-car"></i>
                    </NavLink>
                </h1>
            </div>
            <div className={'headlogos'}>

                <ul>
                    <li className={'shareon'}>Share On:</li>
                    <li>
                        <i className="fa fa-facebook firstfb" aria-hidden="true"/>
                    </li>
                    <li>
                        <i className="fa fa-twitter twit" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-instagram ig" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}