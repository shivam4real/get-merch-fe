import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Grid, Box } from "@mui/material"
import MainContainer from "../Container/container"


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
        <Box sx={{ flexFlow: 1 }}>
            <Grid container>
               
                <Grid item xs={12} sm={12} md={12}>
                    <MainContainer />
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default LandingPage
