import React from 'react'
import "typeface-fira-code"
//styles
import '../styles/layout.css'
//components
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

const Layout = ({children}) => (
    <>
        <div className={`top-line`}></div>
        <div className={`main-container`}>
            <div className={`content`}>
                <Navbar />
                <hr className={`separator`}></hr>
                {children}
                <br/>
                <hr className={`separator`}></hr>
                <Footer />
            </div>
        </div>
    </>
)

export default Layout