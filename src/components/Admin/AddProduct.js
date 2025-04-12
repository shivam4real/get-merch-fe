import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";
// import axios from "axios";

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

const AddProduct = ({ open, onClose, product, onSubmit, isEditMode }) => {
    const [productDetails, setProductDetails] = useState({
        productType: product?.productType || "",
        color: product?.color || "",
        size: product?.size || [],
        price: product?.price || "",
        creator: product?.creator || "",
    });
    const [productImage, setProductImage] = useState(null);
    const [imageName, setImageName] = useState(product?.photo ? "Existing Image" : "");

    // Ensure productDetails updates correctly when props change.
    useEffect(() => {
        if (product) {
            setProductDetails({
                productType: product.productType || "",
                color: product.color || "",
                size: product.size || [],
                price: product.price || "",
                creator: product.creator || "",
            });
            setImageName(product.photo ? "Existing Image" : "");
        } else {
            setProductDetails({
                productType: "",
                color: "",
                size: [],
                price: "",
                creator: "",
            });
            setImageName("");
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSizeChange = (e) => {
        const { options } = e.target;
        const selectedSizes = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setProductDetails((prev) => ({ ...prev, size: selectedSizes }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProductImage(file);
        setImageName(file ? file.name : "");
    };

    const handleSubmit = () => {
        if (isEditMode) {
            onSubmit({ ...productDetails, photo: productImage });
        } else {
            const formData = new FormData();
            formData.append("productType", productDetails.productType);
            formData.append("color", productDetails.color);
            formData.append("size", productDetails.size);
            formData.append("price", productDetails.price);
            formData.append("creator", productDetails.creator);
            if (productImage) {
                formData.append("photo", productImage);
            }
            onSubmit(formData);
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            style={{ backdropFilter: "blur(5px)" }}
        >
            <Box style={modalStyle}>
                <Typography variant="h6" style={{ marginBottom: "20px" }}>
                    {isEditMode ? "Edit Product" : "Add New Product"}
                </Typography>
                <TextField
                    select
                    label="Product Type"
                    name="productType"
                    value={productDetails.productType}
                    onChange={handleChange}
                    fullWidth
                    style={{ marginBottom: "10px" }}
                    SelectProps={{ native: true }}
                >
                    <option value="">Select Product Type</option>
                    <option value="Tshirt">Tshirt</option>
                    <option value="Mug">Mug</option>
                    <option value="Key Chain">Key Chain</option>
                </TextField>
                {productDetails.productType === "Tshirt" && (
                    <>
                        <TextField
                            select
                            label="Color"
                            name="color"
                            value={productDetails.color}
                            onChange={handleChange}
                            fullWidth
                            style={{ marginBottom: "10px" }}
                            SelectProps={{ native: true }}
                        >
                            <option value="">Select Color</option>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                        </TextField>
                        <TextField
                            select
                            label="Size"
                            name="size"
                            value={productDetails.size}
                            onChange={handleSizeChange}
                            fullWidth
                            style={{ marginBottom: "10px" }}
                            SelectProps={{
                                native: true,
                                multiple: true,
                            }}
                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </TextField>
                    </>
                )}
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
                {imageName && (
                    <Typography variant="body2" style={{ marginBottom: "10px" }}>
                        Uploaded Image: {imageName}
                    </Typography>
                )}
                <Button
                    variant="contained"
                    component="label"
                    style={{ marginBottom: "10px" }}
                >
                    Upload Image
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{ marginRight: "10px" }}
                >
                    {isEditMode ? "Update" : "Submit"}
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={onClose}
                >
                    Cancel
                </Button>
            </Box>
        </Modal>
    );
};

export default AddProduct;
