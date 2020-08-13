import React, { useState, useEffect } from 'react';
import dataFake from './dataFake';
import Routers from './routers';
import apiRequest from './api/productApi'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(()=>{
    // cho nay su dung api get product
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    const getCategory = async () => {
      try {
        const { data } = await apiRequest.getAllCate();
        setCategory(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
  getCategory();
    getProducts();
  }, []);
 
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      console.log(newProducts)
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await apiRequest.removeCate(id);
      const newCategory = category.filter(category => category.id !== id);
      console.log(newCategory)
      setCategory(newCategory);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  const onHanleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  const onHanleAddCate = async (categories) => {
    try {
      const { data } = await apiRequest.createCate(categories);
      setCategory([
        ...category,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleUpdateCate = async (updateCategory) => {
    try{
      await apiRequest.updateCate(updateCategory.id, updateCategory);
      const newCategory = category.map(categories => (
        categories.id === updateCategory.id ? updateCategory : categories  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
      ));
      localStorage.setItem('category', JSON.stringify(newCategory))
      setCategory(newCategory);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleUpdate = async (updateProduct) => {
    try{
      await apiRequest.update(updateProduct.id, updateProduct);
      const newProducts = products.map(product => (
        product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
      ));
      localStorage.setItem('products', JSON.stringify(newProducts))
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
        <Routers 
              products={products} 
              onRemove={onHandleRemove} 
              onAdd={onHanleAdd} 
              onUpdate={onHandleUpdate}
              category={category}
              onRemoveCate={onHandleRemoveCate}
              onAddCate={onHanleAddCate}
              onUpdateCate={onHandleUpdateCate}
        />
    </div>
    
  )

}
export default App;


