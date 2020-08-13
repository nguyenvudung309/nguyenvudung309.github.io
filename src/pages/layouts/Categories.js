import React from 'react';
import Header from '../../components/Product/Header'
import Footer from '../../components/Product/Footer'
import Navbar from '../../components/Product/NavBar';
export default ({ children }) => {

    console.log('render Main')

    return (
        <div>
            <Header />
            <Navbar />
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
