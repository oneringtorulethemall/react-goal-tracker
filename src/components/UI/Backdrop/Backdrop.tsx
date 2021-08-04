import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props: any) => {
    return (
        <div className={classes.backdrop}
            onClick={props.onConfirm} />
    )
}

export default Backdrop;