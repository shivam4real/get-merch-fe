import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    return (
        <Box sx={{ bgcolor: "#f0f0f0", padding: "1rem" }}>
            <Typography variant="h4" component="h2">
                Get Merch
            </Typography>
            <Button onClick={handleLogout}>Log Out</Button>
        </Box>
    )
}

export default Header
