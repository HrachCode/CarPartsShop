import React, {useState} from 'react'
import './SpareParts.scss'
import { Input } from '@material-ui/core';
import SearchParts from "./SearchParts/SearchParts";
export default () => {
    const [part, setPart] = useState([
        {id: 0, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/2.png', title: 'Brake System', content: ['Brake Pads', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
        {id: 1, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/9.png', title: 'Brake System', content: ['Brake Pads', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
        {id: 2, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/1.png', title: 'Brake System', content: ['Brake Pads', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
        {id: 3, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/3.png', title: 'Brake System', content: ['Brake Pads', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
        {id: 8, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/2.png', title: 'Brake System', content: ['Brake Pads', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
        {id: 4, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/2.png', title: 'Brake System', content: ['Brake Pads', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
        {id: 5, img: 'https://cdn.autoteiledirekt.de/thumb/assets/direkt/ersatz_categories/png/100x100/2.png', title: 'Brake System', content: ['Brake Pads', 'Brake Discs', 'Brake Calipers', 'Brake Hose', 'Brake Pad Wear Sensor']},
    ])



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
                    {part.map((e,i) => {
                        return(
                            <div key={i} className={'spare_part'}>
                                <div className="part_img">
                                    <img src={e.img} alt=""/>
                                </div>
                                <ul>
                                    {e.content.map((k,l) => {
                                        return(
                                            <li key={l}>{k}</li>
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