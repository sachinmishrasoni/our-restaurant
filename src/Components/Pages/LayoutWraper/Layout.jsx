import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NavBarForMob from '../../GlobalComponents/NavBarForMob'

const Layout = ({ children, logInDialog }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
            <NavBarForMob logInDialog={logInDialog} />  {/* Mobile Small Navbar */}
        </>
    )
}

export default Layout