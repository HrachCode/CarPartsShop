import React from 'react';
import FooterBottom from './footerbottom/Footerbottom';
import './Footer.scss'
import './MediaFooter.scss'
import {NavLink} from "react-router-dom";

export default ()=>{

    return(
       <div className={'footerl'}>

           <div className={'footertop'}>
               <div className={'aaaa'}>
                   <div className={'footone aa'}>
                       <div className={'shopy'}>
                           <span className={'bigE'}>CARPARTS</span>

                           <i className="fa fa-car"></i>
                       </div>
                       <div className={'lorem'}>
                           <p>Lorem ipsum dolor sit amet, consectetur.</p>
                           <p>Lorem ipsum dolor sit amet. Lorem ipsum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur.</p>
                       </div>
                       <div className={'footericons'}>
                           <ul>
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

                   <div className={'footertwo aa'}>
                       <p><b>OUR</b> INFORMATION</p>
                       <div className={'footnav'}>
                           <ul>
                               <li>
                                   <a href="1">Home</a>
                               </li>
                               <li>
                                   <a href="1">Men`s wear</a>
                               </li>
                               <li>
                                   <a href="1">Women`s wear</a>
                               </li>
                               <li>
                                   <a href="1">About</a>
                               </li>
                               <li>
                                   <a href="1">Short Codes</a>
                               </li>
                               <li>
                                   <a href="1">Contact</a>
                               </li>
                           </ul>
                       </div>
                   </div>

               </div>

               <div className={'aaaa'}>
                   <div className={'footerthree aa'}>
                       <p className={'storetxt'}><b>STORE</b> INFORMATION</p>
                       <div className={'footercontact'}>
                           <i className="fa fa-phone" aria-hidden="true"></i>
                           <div>
                               <b>Phone Number</b>
                               <p>+374 99 132 032</p>
                           </div>
                       </div>
                       <div className={'footercontact'}>
                           <i className="fa fa-envelope" aria-hidden="true"></i>
                           <div>
                               <b>Email Address</b>
                               <p>Email : <span >info@alcyonsystems.am</span></p>
                           </div>
                       </div>
                       <div className={'footercontact'}>
                           <i className="fa fa-map-marker" aria-hidden="true"></i>
                           <div>
                               <b>Location</b>
                               <p>Armenia,Yerevan Moscovyan 3/2</p>
                           </div>
                       </div>
                   </div>

                   
               </div>

           </div>


           <div>
               <FooterBottom/>
           </div>
       </div>
    )
}