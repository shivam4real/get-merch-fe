import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Container } from "@mui/material"

import Header from "../Header/Header"
import MainContainer from "../Container/container"
import Footer from "../Footer/Footer"

const LandingPage = () => {
    let navigate = useNavigate()

    let token = localStorage.getItem("token")
    console.log(token)
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container component="main" maxWidth="xl">
            <Header />
            <MainContainer />
            <Footer />
        </Container>
    )
}

export default LandingPage
