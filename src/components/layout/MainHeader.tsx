import React, { FC } from 'react';
import bg from 'assets/images/main_bg.png'
import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const MainHeader: FC<any> = ({ title, subtitle, onClickAction, ...rest }) => {
    return (
        <div className="app-header">
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>

        </div>
    )
}


export default MainHeader;