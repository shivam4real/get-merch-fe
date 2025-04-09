import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import profileStyles from "./ProfileStyle";

const Profile = () => {
    const { register, handleSubmit, setValue, formState: { errors, isDirty } } = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [initialValues, setInitialValues] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get("/user/getUserDetails");
                const { firstName, lastName, email, mobile } = response.data.data;
                setValue("firstName", firstName);
                setValue("lastName", lastName);
                setValue("email", email);
                setValue("mobile", mobile);
                setInitialValues({ firstName, lastName, email, mobile });
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();
    }, [setValue]);

    const onSubmit = async (data) => {
        const updatedFields = Object.keys(data).reduce((acc, key) => {
            if (data[key] !== initialValues[key]) {
                acc[key] = data[key];
            }
            return acc;
        }, {});

        if (Object.keys(updatedFields).length === 0) {
            alert("No changes detected.");
            return;
        }

        try {
            const response = await axios.put("/user/updateProfile", updatedFields);
            console.log("Profile updated successfully:", response.data);
            setIsEditing(false);
            alert("Details updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    const handleChangePassword = () => {
        navigate("/changePassword");
    };

    return (
        <Box sx={profileStyles.container}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h4" sx={profileStyles.title}>
                    User Profile
                </Typography>
                <IconButton onClick={() => setIsEditing(true)} sx={profileStyles.editButton}>
                    <EditIcon />
                </IconButton>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    {...register("firstName", { required: "First Name is required" })}
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    disabled={!isEditing}
                    sx={profileStyles.input}
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    {...register("lastName", { required: "Last Name is required" })}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    disabled={!isEditing}
                    sx={profileStyles.input}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    disabled={!isEditing}
                    sx={profileStyles.input}
                />
                <TextField
                    fullWidth
                    label="Mobile"
                    variant="outlined"
                    {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid mobile number",
                        },
                    })}
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    disabled={!isEditing}
                    sx={profileStyles.input}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isDirty}
                    sx={profileStyles.submitButton}
                >
                    Update Details
                </Button>
            </form>
            <Button
                variant="outlined"
                color="secondary"
                onClick={handleChangePassword}
                sx={{ marginTop: "20px", display: "block", margin: "0 auto" }}
            >
                Change Password
            </Button>
        </Box>
    );
};

export default Profile;