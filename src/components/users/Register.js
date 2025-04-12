import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import registerStyles from "./registerStyle";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            // API call to register the user
            console.log("User data:", data);
        } catch (error) {
            console.error("Error registering user:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const password = watch("password", "");

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={registerStyles.container}>
                <Typography component="h1" variant="h5" sx={registerStyles.title}>
                    Register
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("firstName", { required: "First name is required" })}
                        error={!!errors.firstName}
                        helperText={errors.firstName ? errors.firstName.message : ""}
                        margin="normal"
                        fullWidth
                        label="First Name"
                        autoFocus
                    />
                    <TextField
                        {...register("lastName", { required: "Last name is required" })}
                        error={!!errors.lastName}
                        helperText={errors.lastName ? errors.lastName.message : ""}
                        margin="normal"
                        fullWidth
                        label="Last Name"
                    />
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
                    />
                    <TextField
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Invalid phone number",
                            },
                        })}
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : ""}
                        margin="normal"
                        fullWidth
                        label="Phone Number"
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
                    <TextField
                        {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                        margin="normal"
                        fullWidth
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={toggleConfirmPasswordVisibility}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={registerStyles.submitButton}
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitting ? "Registering..." : "Register"}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
