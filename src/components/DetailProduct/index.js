import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    useParams,
    Link
} from "react-router-dom";

const DetailProduct = ({ products }) => {
    useEffect(()=>{
        window.scrollTo(0,0)
        },[])
    let { id } = useParams();
    const product = products.find(product => product.id === id)
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
            <h1>Thông tin sản phẩm</h1>
            <img src={product.image} /><br />
            Tên sản phẩm: {product.name}<br />
            Giá sản phẩm: {product.price}
            </section>
            <section id="footer">
                    <div className="inner">
                        <h3>Chúng tôi luôn đem đến cho các bạn các sản phẩm tốt mà bạn cần</h3>
                    </div>
                </section>
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct