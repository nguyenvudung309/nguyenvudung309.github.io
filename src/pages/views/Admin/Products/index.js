import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    return (
        <div>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                </div>
                <div className="card-body">
                <Link className="btn btn-success" to="/admin/addproduct">Thêm sản phẩm</Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Ảnh sản phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col" width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map(({ id, name, image, price}, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => removeHandle(id)}>Xóa</button>
                                            <Link className="btn btn-primary" to={`/admin/product/${id}`}>Sửa</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {
}

export default ProductsManager
