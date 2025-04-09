import React, { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";
import axios from "axios";
// import adminStyles from "./adminStyle";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: 24,
    padding: "20px",
};

const AddProduct = ({ open, onClose }) => {
    const [productDetails, setProductDetails] = useState({
        productType: "",
        color: "",
        size: "",
        price: "",
        creator: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        axios.post("/product/addProduct", productDetails)
            .then(() => {
                alert("Product added successfully!");
                onClose();
            })
            .catch((error) => {
                console.error("Error adding product:", error);
                alert("Failed to add product.");
            });
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            style={{ backdropFilter: "blur(5px)" }}
        >
            <Box style={modalStyle}>
                <Typography variant="h6" style={{ marginBottom: "20px" }}>Add New Product</Typography>
                <TextField
                    label="Product Type"
                    name="productType"
                    value={productDetails.productType}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    label="Color"
                    name="color"
                    value={productDetails.color}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    label="Size"
                    name="size"
                    value={productDetails.size}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    label="Price"
                    name="price"
                    value={productDetails.price}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: "10px" }}
                />
                <TextField
                    label="Creator"
                    name="creator"
                    value={productDetails.creator}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: "10px" }}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: "10px" }}>
                    Submit
                </Button>
                <Button variant="outlined" color="secondary" onClick={onClose}>
                    Cancel
                </Button>
            </Box>
        </Modal>
    );
};

export default AddProduct;
