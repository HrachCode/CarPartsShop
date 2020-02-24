import React, {useState,Component}from 'react'
import './SpareParts.scss'
import axios from 'axios'
import { Input } from '@material-ui/core';
import SearchParts from "./SearchParts/SearchParts";


export default class SpareParts extends Component {

        state={
            part:[
                {id: 0, img: 'https://www.autocompas.ru/upload/home/sections/section15.png', title: 'EXTERNAL ENGINE', content: ['Starter Wear Sensor','Brake Pads', 'Thermostat', 'Idler puley', 'Fuel poump', ]},
                {id: 1, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/9.png', title: 'Brake System', content: ['Belt', 'Brake Discs', 'Kit Belt', 'Serpentin Belt', 'Brake']},
                {id: 2, img: 'https://virap10.s3.ap-south-1.amazonaws.com/%D5%BF%D5%A5%D5%BD%D5%BF/Untitled-2.png', title: 'Brake System', content: ['Duralast Wheel', 'Tie Rod End', 'Stirring Pomp', 'Line Hose', 'Control Arm']},
                {id: 3, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/3.png', title: 'TIRE AND WHEEL', content: ['Alignament', 'Steering Gear', 'Traction Bar', 'Bushings', 'Lod Leving Kit']},
                {id: 8, img: 'https://www.autocompas.ru/upload/home/sections/section7.png', title: 'Brake System', content: ['STEERING', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
                {id: 4, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/2.png', title: 'SUSPENSION', content: ['Duralast Brake Rotor', 'Bracketed Brake Caliper', 'Brake Drum', 'Brake Booster', 'Master Cilinder']},
                {id: 5, img: 'https://www.autocompas.ru/upload/home/sections/section1.png', title: 'TRACTION CONTROL', content: ['Duralast Brake Rotor', 'Bracketed Brake Caliper', 'Brake Drum', 'Brake Booster', 'Master Cilinder']},
                {id: 9, img: 'https://virap10.s3.ap-south-1.amazonaws.com/%D5%BF%D5%A5%D5%BD%D5%BF/Untitled-1.png', title: 'TRACTION CONTROL', content: ['Duralast Brake Rotor', 'Bracketed Brake Caliper', 'Brake Drum', 'Brake Booster', 'Master Cilinder']},
            ]
        }

    render(){
       
      
      const hendlClick = async k=>{
      this.props.scroll()
      let data = await axios.post('cars/partfilter',{filter:k})
        try {
          this.props.bigFilter(data);
        } catch (e) {
          console.log(e);
        }
      }
          // const [search, setSearch] = useState(['ABS Pump',
          //     'Blower Motor Resistor', 'Heater Blower Motor',
          //     'Beam Axle','Car Battery','Axle Bushes','Automatic Transmission Fluid','Anti Roll Bar Bushes',
          //     'Anti Freeze','Ambient Temperature Sensor','Alternator Regulator',
          //     'Air Conditioning Pipe','Aerial','Accelerator Pedal','ABS Sensor',
          //     'Reluctor Ring'
          // ])
      
      
      
          return(
              <div className={'sparepart'}>
                  <div className="part_flex">
                      <div className="containerpart">
                            {this.state.part.map((e,i) => {
                              return(
                                  <div key={i} className={'spare_part'}>
                                      <div className="part_img">
                                          <img src={e.img} alt=""/>
                                      </div>
                                      <ul>
                                          {e.content.map((k,l) => {
                                              return(
                                                  <li key={l} onClick = {()=>hendlClick(k)}>{k}</li>
                                              )
                                          })}
                                      </ul>
                                  </div>
                              )
                          })}
                      </div>
                      <div className={'search_part'}>
                          <div className={'categories_search'}>
                              <h3>ALL CATEGORIES</h3>
                              <SearchParts/>
                          </div>
                          <div className="search_scroll" >
                              {/*{search.map(e => {*/}
                              {/*    return(*/}
                              {/*        <div>*/}
                              {/*            <p>{e}</p>*/}
                              {/*        </div>*/}
                              {/*    )*/}
                              {/*})}*/}
                          </div>
                      </div>
                  </div>
              </div>
          )
    }
}
