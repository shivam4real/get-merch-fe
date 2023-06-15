import axios from "axios"
import { useState } from "react"
import {
    Box,
    TextField,
    Button,
    Container,
    Typography,
    Avatar,
} from "@mui/material"

import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async () => {
        console.log(username + "   " + password)
        try {
            let res = await axios.post("/user/login", {
                email: username,
                password: password,
            })
            localStorage.setItem("token", res.data.data)
            navigate("/")
        } catch (err) {
            console.log("errr" + err)
        }
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    width: "400px",
                    height: "500px",
                    backgroundColor: "rgba(245, 212, 39, 0.44)",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <Box>
                    <Typography variant="overline" display="block" gutterBottom>
                        Username
                    </Typography>
                    <TextField
                        required
                        id="email"
                        fullWidth
                        onChange={handleUsernameChange}
                    />
                    <Typography variant="overline" display="block" gutterBottom>
                        Password
                    </Typography>
                    <TextField
                        required
                        id="password"
                        type="password"
                        fullWidth
                        onChange={handlePasswordChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Login
