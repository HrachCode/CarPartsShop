import React, {useState} from 'react'

export default ({regionHand,city})=>{
    const regions = [
        {region:'Yerevan',places:[{name:'Ajapnyak',title:'Yerevan'},{name:'Davitashen',title:'Yerevan'},{name:'Malatia-Sebastia',title:'Yerevan'}]},
        {region:'Kotayk',places:[{name:'Abovyan',title:'Kotayk'},{name:'Arinj',title:'Kotayk'},{name:'Eghvard',title:'Kotayk'},{name:'Balahovit',title:'Kotayk'}]},
        {region:'Syunik',places:[{name:'Goris',title:'Syunik'},{name:'Qajaran',title:'Syunik'},{name:'Kapan',title:'Syunik'},{name:'Meghri',title:'Syunik'},{name:'Sisian',title:'Syunik'}]}
        // {region:'Syunik', places:['Goris','Qajaran','Kapan','Meghri','Sisian']}
    ]


    return(
        <div>
           
            <select name="" id="" placeholder={'Select Region'}  onChange={regionHand}>
                <option value="Select Region"></option>
                {regions.map((e,i)=>{
                    return(
                        <optgroup key={i} label={e.region}>
                            {e.places.map((i,j)=>{
                                return(
                                    <option key={j} value={i.title}  > {i.name}</option>
                                )
                            })}
                        </optgroup>
                    )
                })}
            </select>
          
            
        </div>
    )
}