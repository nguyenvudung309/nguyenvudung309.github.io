import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";
const Contact = props => {
    return (
        <div>
            <header id="header">
                    <div className="inner">
                        <a href="" class="logo">FPT POLYTECHNIC</a>
                    </div>
                    <div className="inner">
                    <Link className="nav-link" to="/main/about">giới thiệu</Link>
                    <Link className="nav-link" to="/main/contact">liên hệ</Link>
                    <Link className="nav-link" to="/main/shop">shop sản phẩm</Link>
                    </div>
                </header>
            <section id="banner">
            <div className="inner">
                <h1>Thông tin liên hệ</h1>
                <p>
                    Điện thoại: 0989052000<br />
                    Email: fptpolytechnic@gmail.com
                </p>
            </div>
            </section>
            <section id="footer">
                    <div className="inner">
                        <h3>Chúng tôi luôn đem đến cho các bạn các sản phẩm tốt mà bạn cần</h3>
                    </div>
            </section>
        </div>
    )
}

Contact.propTypes = {

}

export default Contact
