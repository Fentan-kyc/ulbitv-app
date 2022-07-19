import React from 'react'

const MySelect = ({ opts, defaultOpt, value, onChange }) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value={defaultOpt}>Sort by</option>
            {opts.map(opt =>
                <option value={opt.value} key={opt.value}>{opt.name}</option>
            )}
        </select>
    )
}

export default MySelect