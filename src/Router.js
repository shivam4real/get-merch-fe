import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./components/users/Login"
import Register from "./components/users/Register"
import LandingPage from "./components/Landing Page/LandingPage"
import Cart from "./components/Cart/Cart"
import ProductDetails from "./components/Product/ProductDetails"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
