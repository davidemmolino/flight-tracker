import React, { FC } from 'react';
import bg from 'assets/images/main_bg.png'

const MainContainer: FC<any> = ({ className, children, ...rest }) => {
    return (
        <div className={className}
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            {children}
        </div>
    )
}


export default MainContainer;