import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Container as MainContainer } from "@mui/material"

import Header from "../Header/Header"
import Container from "../Container/container"
import Footer from "../Footer/Footer"

const LandingPage = () => {
    let navigate = useNavigate()

    let token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <MainContainer component="main">
            <Header />
            <Container />
            <Footer />
        </MainContainer>
    )
}

export default LandingPage
