import React, { useEffect, useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import axios from "axios";
import { Delete } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
import adminStyles from "./adminStyle";
import AddProduct from "./AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../features/productSlice";

const styles = adminStyles;

const ShirtList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productStatus = useSelector((state) => state.products.status);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        if (productStatus === "idle") {
            dispatch(fetchProductList());
        }
    }, [productStatus, dispatch]);

    const handleDelete = (id) => {
        axios.delete(`/product/${id}`)
            .then(() => {
                dispatch(fetchProductList()); // Refresh the product list
            })
            .catch(error => {
                console.error("Error deleting product:", error);
            });
    };

    const handleEdit = (product) => {
        setCurrentProduct(product);
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
        setCurrentProduct(null);
    };

    const handleUpdateProduct = async (updatedProductDetails) => {
        try {
            const formData = new FormData();
            formData.append("productType", updatedProductDetails.productType);
            formData.append("color", updatedProductDetails.color);
            formData.append("size", updatedProductDetails.size);
            formData.append("price", updatedProductDetails.price);
            formData.append("creator", updatedProductDetails.creator);
            if (updatedProductDetails.photo) {
                formData.append("productImage", updatedProductDetails.photo);
            }

            await axios.put(`/product/${currentProduct._id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            dispatch(fetchProductList()); // Refresh the product list

            setIsEditModalOpen(false);
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Failed to update product.");
        }
    };

    const handleAddProduct = () => {
        setCurrentProduct(null);
        setIsEditModalOpen(true);
    };

    const handleAddNewProduct = async (formData) => {
        try {
            await axios.post("/product/addProduct", formData);

            dispatch(fetchProductList()); // Refresh the product list

            setIsEditModalOpen(false);
        } catch (error) {
            console.error("Error adding new product:", error);
            alert("Failed to add new product.");
        }
    };

    return (
        <Box style={styles.container}>
            <Button
                style={styles.addButton}
                variant="contained"
                color="primary"
                onClick={handleAddProduct}
            >
                Add New Shirt
            </Button>
            <Typography style={styles.sectionTitle} variant="h5">Product List</Typography>
            {products.map(product => (
                <Box key={product._id} style={styles.item}>
                    <img
                        src={`data:image/jpeg;base64,${product.photo}`}
                        alt={product.productType}
                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    />
                    <TextField
                        value={product.productType}
                        disabled={!product.isEditable}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={Array.isArray(product.color) ? product.color.join(", ") : "N/A"}
                        disabled={!product.isEditable}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={Array.isArray(product.size) ? product.size.join(", ") : "N/A"}
                        disabled={!product.isEditable}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={product.price}
                        disabled={!product.isEditable}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={product.creator}
                        disabled={!product.isEditable}
                        style={{ marginRight: "10px" }}
                    />
                    <Edit
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        color="secondary"
                        onClick={() => handleEdit(product)}
                    />
                    <Delete
                        style={{ cursor: "pointer" }}
                        color="error"
                        onClick={() => handleDelete(product._id)}
                    />
                </Box>
            ))}
            <AddProduct
                open={isEditModalOpen}
                onClose={handleCloseModal}
                product={currentProduct}
                onSubmit={!!currentProduct ? handleUpdateProduct : handleAddNewProduct}
                isEditMode={!!currentProduct}
            />
        </Box>
    );
};

export default ShirtList;
