import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    Box,
    TextField,
    Button,
    Container,
    Typography,
    Avatar,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import loginStyles from "./loginStyle";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            let res = await axios.post("/user/login", {
                email: data.email,
                password: data.password,
            });

            if (res.status === 400) {
                alert(res.data.message);
            }
            localStorage.setItem("token", res.data.data);
            navigate("/");
        } catch (err) {
            console.log("Error: " + err);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={loginStyles.container}>
                <Avatar sx={loginStyles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={loginStyles.title}>
                    Log in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                        margin="normal"
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ""}
                        margin="normal"
                        fullWidth
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={loginStyles.submitButton}
                    >
                        Log In
                    </Button>
                    <Typography variant="body2" sx={loginStyles.linkText}>
                        Don't have an account? <Link to="/register">Register</Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
