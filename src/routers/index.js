import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import Addproduct from './../components/Addproduct'
import EditProduct from './../components/EditProduct'
import DetailProduct from './../components/DetailProduct'
import CategoryManager from '../pages/views/Admin/Category'
import AddCategory from '../components/AddCategory'
import EditCategory from '../components/EditCategory' 
//Views
import Home from '../pages/views/Main/Home'
import About from '../pages/views/Main/About';
import Contact from '../pages/views/Main/Contact'
import Shop from '../pages/views/Main/Shop'
const Routers = ({ category, products, onRemove, onAdd, onUpdate, onRemoveCate, onAddCate, onUpdateCate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHanleAdd = (product) => {
        onAdd(product)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHanleAddCate = (category) => {
        onAddCate(category)
    }
    const onHandleUpdateCate = (id, category) => {
        onUpdateCate(id, category)
    }
return (
    <Router>
        <Switch>
            <Route path="/admin/:path?/:path?" exact>
                <MainAdmin>
                    <Switch>
                        <Route path='/admin' exact>
                            <Dashboard />
                        </Route>
                        
                        <Route path='/admin/products'>
                            <ProductsManager products={products} onRemove={onHandleRemove} />
                        </Route>
                        <Route path='/admin/category'>
                            <CategoryManager category={category} onRemoveCate={onHandleRemoveCate} />
                        </Route>
                        
                        <Route path="/admin/addproduct">
                            <Addproduct onAdd={onHanleAdd}/>
                        </Route>
                        <Route path="/admin/addcategory">
                            <AddCategory onAddCate={onHanleAddCate} />
                        </Route>
                        
                        <Route path='/admin/product/:id'
                            render={(props) =>
                                <EditProduct {...props} products={products} onUpdate={onHandleUpdate} />
                            }
                        >
                        </Route>
                        <Route path='/admin/categories/:id'
                            render={(props) =>
                                <EditCategory {...props} category={category} onUpdateCate={onHandleUpdateCate} />
                            }
                        >
                        </Route>
                    </Switch>
                </MainAdmin>
            </Route>
            <Route>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/main/about" exact>
                         <About />
                    </Route>
                    <Route path="/product/:id">
                        <DetailProduct products={products} />
                    </Route>
                    <Route path="/main/contact" exact>
                        <Contact />
                    </Route>
                    <Route path="/main/shop" exact>
                        <Shop products={products} />
                    </Route>
                </Switch>

            </Route>
        </Switch>
    </Router>
)
                        }

Routers.propTypes = {

}

export default Routers
