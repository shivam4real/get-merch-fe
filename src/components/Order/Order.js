import React from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import orderStyles from "./orderStyle";

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Address Data:", data);
        navigate("/payment");
    };

    return (
        <Box sx={orderStyles.container}>
            <Typography variant="h4" sx={orderStyles.title}>
                Add Your Address
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    {...register("address", { required: "Address is required" })}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    sx={orderStyles.input}
                />
                <TextField
                    fullWidth
                    label="City"
                    variant="outlined"
                    {...register("city", { required: "City is required" })}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                    sx={orderStyles.input}
                />
                <TextField
                    fullWidth
                    label="State"
                    variant="outlined"
                    {...register("state", { required: "State is required" })}
                    error={!!errors.state}
                    helperText={errors.state?.message}
                    sx={orderStyles.input}
                />
                <TextField
                    fullWidth
                    label="Pin Code"
                    variant="outlined"
                    {...register("pinCode", {
                        required: "Pin Code is required",
                        pattern: {
                            value: /^[0-9]{6}$/,
                            message: "Invalid Pin Code",
                        },
                    })}
                    error={!!errors.pinCode}
                    helperText={errors.pinCode?.message}
                    sx={orderStyles.input}
                />
                <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    {...register("phoneNumber", {
                        required: "Phone Number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid Phone Number",
                        },
                    })}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                    sx={orderStyles.input}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={orderStyles.button}
                >
                    Proceed to Payment
                </Button>
            </form>
        </Box>
    );
};

export default Order;