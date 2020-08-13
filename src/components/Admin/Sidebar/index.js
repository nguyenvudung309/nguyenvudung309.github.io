import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";
const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Trang quản trị</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/products">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Sản phẩm</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/category">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Danh mục</span></Link>
            </li>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
