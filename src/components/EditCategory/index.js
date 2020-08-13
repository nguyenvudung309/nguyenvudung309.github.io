import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';


const EditCategory = ({ category, onUpdateCate }) => {
    let { id } = useParams();
    let history = useHistory();
    const categories = category.find(categories => categories.id === id);

    const [currentCategories, setCurrentCategories] = useState(categories);

    const onHandleSubmitCate = (e) => {
        e.preventDefault();
        onUpdateCate(currentCategories);
        history.push('/admin/category');
    }
    const onHandleChangeCate = e => {
        const { name, value } = e.target;
        setCurrentCategories({
            ...currentCategories,
            [name]: value
        })
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmitCate} className="w-50">
                <div className="form-group">
                    <label htmlFor="CategoriesName">Tên danh mục</label>
                    <input type="text" name="cate_name" value={currentCategories.cate_name} onChange={onHandleChangeCate} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}
EditCategory.propTypes = {
    category: PropTypes.array
}

export default EditCategory