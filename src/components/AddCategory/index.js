import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import firebase from '../../firebase'
const AddCategory = ({ onAddCate }) => {
    const { register, handleSubmit, errors } = useForm(); 
    let history = useHistory();

    const [desc, setDesc] = useState("");

    const onHandleSubmitCate = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    desc,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAddCate(newData)
                history.push('/admin/category');
            })
        });
    }

    return (
        <div>
            <h3 className="form-group col-md-6">Add Categories Name</h3>
            <div className="form-group">
                <div className="card-body">
                    <form className="form-group" action="" onSubmit={handleSubmit(onHandleSubmitCate)}>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" name="cate_name" className="form-control" ref={register({ required: true})}/>
                    <small id="cate_nameHelp" className="form-text text-danger">
                        {errors.cate_name && errors.cate_name.type === "required" && <span>Chưa nhập tên danh mục</span>}
                    </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">ảnh</label>
                            <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                ref={register({ required: true })}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                            <small id="imageHelp" className="form-text text-danger">
                                {errors.image && <span>Chưa nhập ảnh</span>}
                                </small>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Thêm danh mục</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
AddCategory.propTypes = {
    onAddCate: PropTypes.func
}

export default AddCategory
