import http from "./axiosHttp";

const getAll = () => {
    return http.get("/products");
};
const get = id => {
    return http.get(`/products/${id}`);
};

const create = data => {
    return http.post("/products", data);
};

const update = (id, data) => {
    return http.put(`/products/${id}`, data);
};
const remove = id => {
    console.log(id);
    return http.delete(`/products/${id}`);
};

/*======== CATEGORY ====*/
const getAllCate = () => {
    return http.get("/category");
};


const getCate = id => {
    return http.get(`/category/${id}`);
};

const createCate = data => {
    return http.post("/category", data);
};

const updateCate = (id, data) => {
    return http.put(`/category/${id}`, data);
};

const removeCate = id => {
    console.log(id);
    return http.delete(`/category/${id}`);
};



export default {
    getAll,
    get,
    create,
    update,
    remove,
    getAllCate,
    getCate,
    createCate,
    updateCate,
    removeCate
};