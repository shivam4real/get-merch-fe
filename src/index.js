import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import axios from "axios"
import { Provider } from "react-redux";
import store from "./store";
import { jwtDecode } from "jwt-decode";
import { setUser } from "./features/userSlice";

const root = ReactDOM.createRoot(document.getElementById("root"))
// Set the base url
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const token = localStorage.getItem("token");
if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
    try {
        const decodedToken = jwtDecode(token);
        store.dispatch(setUser({ isAdmin: decodedToken.isAdmin }));
    } catch (error) {
        console.error("Error decoding token:", error);
    }
}
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
