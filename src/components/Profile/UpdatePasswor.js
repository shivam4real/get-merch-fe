import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const UpdatePassword = () => {
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        retypePassword: "",
    });
    const [isMatching, setIsMatching] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "newPassword" || name === "retypePassword") {
            setIsMatching(
                name === "newPassword"
                    ? value === formData.retypePassword
                    : value === formData.newPassword
            );
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.post("/user/changePassword", {
                oldPassword: formData.oldPassword,
                newPassword: formData.newPassword,
            });
            alert("Password updated successfully!");
        } catch (error) {
            console.error("Error updating password:", error);
            alert("Failed to update password. Please try again.");
        }
    };

    return (
        <Box sx={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                Change Password
            </Typography>
            <TextField
                fullWidth
                label="Old Password"
                variant="outlined"
                name="oldPassword"
                type="password"
                value={formData.oldPassword}
                onChange={handleChange}
                sx={{ marginBottom: "20px" }}
            />
            <TextField
                fullWidth
                label="New Password"
                variant="outlined"
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleChange}
                sx={{ marginBottom: "20px" }}
            />
            <TextField
                fullWidth
                label="Retype New Password"
                variant="outlined"
                name="retypePassword"
                type="password"
                value={formData.retypePassword}
                onChange={handleChange}
                sx={{ marginBottom: "20px" }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!isMatching || !formData.oldPassword}
                sx={{ display: "block", margin: "0 auto" }}
            >
                Update Password
            </Button>
        </Box>
    );
};

export default UpdatePassword;