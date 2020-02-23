import React from 'react'
import Wear from "../wear/Wear";
import Abouttxt from "./aboutcomponents/second/Abouttxt";
import SliderBottom from "../components/sliderbottom/SliderBottom";
import Fixed from "../components/fixed/Fixed";
import Middle from "../components/middle/Middle";

export default () =>{
    return(
        <div>
            <Wear wear={"ABOUT US"} />
            <Abouttxt/>
            <SliderBottom/>
            <Middle/>
            <Fixed/>
        </div>
    )
}