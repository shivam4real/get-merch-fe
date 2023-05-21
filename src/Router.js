import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./components/users/Login"
import Register from "./components/users/Register"
import LandingPage from "./components/Landing Page/LandingPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
