import React from 'react'
import Navi from './Navi'

const Layout = ({children}) => {
    return (
        <div>
            <Navi />
            {children}
        </div>
    )
}

export default Layout;