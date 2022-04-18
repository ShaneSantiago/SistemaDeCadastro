import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Pages/Header/Header"
import HomePage from "../Pages/Home/Home"
import LoginPage from "../Pages/Login/Login"
import ProductPage from "../Pages/Products/Product"
import ProductForm from "../Pages/Products/ProductForm"
import Signup from "../Pages/Signup/Signup"

const Router = ({rightButtonText, setRightButtonText}) => {
    return(
            <Routes>
                <Route exact path="/" element={<HomePage />}> 
                </Route>

                <Route exact path="/login" element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}> 
                </Route>

                <Route exact path="/signup" element={<Signup />}> 
                </Route>

                <Route exact path="/product" element={<ProductPage />}> 
                </Route>

                <Route exact path="/productform" element={<ProductForm />}> 
                </Route>
            </Routes>
    )
}
export default Router