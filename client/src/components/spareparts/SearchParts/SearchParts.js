import React, {useState} from 'react'
import './SearchParts.scss'

export default () => {
    const [value, setValue] = useState('')

    return(
        <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">

            </div>
            <input className="form-control my-0 py-1" type="text" placeholder="Search"
                   aria-label="Search"

                   value={value}
                   onChange={e=>setValue(e.target.value)}

            />

        </div>
    )
}