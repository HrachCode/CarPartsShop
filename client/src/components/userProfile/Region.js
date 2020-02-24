import React from 'react'

export default ({regionHand,city})=>{
    const regions = [
        {region:'Yerevan',places:['Ajapnyak','Davitashen','Erebuni','Avan','Malatia-Sebastia']},
        {region:'Kotayk',places:['Abovyan','Arinj','Eghvard','Hatis','Balahovit','Elxovan']},
        {region:'Syunik', places:['Goris','Qajaran','Kapan','Meghri','Sisian']}
    ]

    const a=''
    return(
        <div>
            <select name="" id="" placeholder={'Select Region'}  onChange={regionHand}>
                <option value="Default">Select Region</option>
                {regions.map((e,i)=>{
                    return(
                        <optgroup label={e.region}>
                            {e.places.map((i,j)=>{
                                return(
                                    <option value={i} name={e.region} >{i}</option>
                                )
                            })}
                        </optgroup>
                    )
                })}
            </select>
        </div>
    )
}