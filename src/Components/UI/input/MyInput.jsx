import React from 'react'
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={classes.myIpt} {...props} />
    )
}

export default MyInput