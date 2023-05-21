import {
    Box,
    TextField,
    Button,
    Container,
    Typography,
    Avatar,
} from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

const Register = () => {
    let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [cnfPassword, setCnfPassword] = useState("")
    const [isNavigate, setIsNavigate] = useState(false)

    useEffect(() => {
        if (isNavigate) {
            navigate("/")
        }
    }, [isNavigate, navigate])

    const handleSummit = async () => {
        if (cnfPassword === password) {
            try {
                let res = await axios.post("/user/register", {
                    username: username,
                    password: password,
                })
                localStorage.setItem("token", res.data.data)
                setIsNavigate(true)
            } catch (err) {
                console.log("errr" + err)
                alert("Some Error happend")
            }
        } else {
            alert("Password not same")
        }
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleCnfPasswordChange = (e) => {
        setCnfPassword(e.target.value)
    }
    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    width: "400px",
                    height: "500px",
                    backgroundColor: "yellow",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
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
                    <Typography variant="overline" display="block" gutterBottom>
                        Confirm Password
                    </Typography>
                    <TextField
                        required
                        id="cnf-password"
                        type="password"
                        fullWidth
                        onChange={handleCnfPasswordChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSummit}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Register
