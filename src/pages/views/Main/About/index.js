import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";
const About = props => {
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
                <p>Trang web của chúng tôi giới thiệu về các mặt hàng khác nhau <br />
                   giúp cho bạn có thể tìm được ra sản phẩm vừa ý đối với bạn. Nếu bạn <br />
                   đang cần tìm sản phẩm thì trang website của chúng tôi là lựa chọn<br />
                   phù hợp nhất đối với bạn
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

About.propTypes = {

}

export default About
