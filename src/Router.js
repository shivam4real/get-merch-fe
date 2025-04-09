import {  Routes, Route } from "react-router-dom";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import LandingPage from "./components/LandingPage/LandingPage";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/Product/ProductDetails";
import Order from "./components/Order/Order";
import Payment from "./components/Payment/Payment";
import Profile from "./components/Profile/Profile";
import UpdatePassword from "./components/Profile/UpdatePasswor";
import Admin from "./components/Admin/Admin";

const Router = () => {
    return (
       
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/order" element={<Order />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/changePassword" element={<UpdatePassword />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        
    );
};

export default Router;
