import { makeStyles } from '@mui/material'
import React from 'react'


const useSyles = makeStyles({
    container: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    }
})

const CustomButton = () => {
    // const  classes = useSyles();
    return (
        // <div className={classes.container}>
        <div>
            CustomButton
        </div>
    )
}

export default CustomButton