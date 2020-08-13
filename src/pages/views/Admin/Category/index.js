import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";

const CategoryManager = ({ category, onRemoveCate }) => {
    const removeHandle = (id) => {
        onRemoveCate(id)
    }
    return (
        <div>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                </div>
                <div className="card-body">
                <Link className="btn btn-success" to="/admin/addcategory">Thêm danh mục</Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col">ảnh danh mục</th>
                                    <th scope="col" width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {category.map(({ id, cate_name, image}, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{cate_name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => removeHandle(id)}>Xóa</button>
                                            <Link className="btn btn-primary" to={`/admin/categories/${id}`}>Sửa</Link>
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
CategoryManager.propTypes = {

}

export default CategoryManager
