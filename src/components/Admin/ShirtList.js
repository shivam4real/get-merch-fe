import React, { useEffect, useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import axios from "axios";
import { Delete } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
import adminStyles from "./adminStyle";
import AddProduct from "./AddProduct";

const styles = adminStyles;

const ShirtList = () => {
    const [products, setProducts] = useState([]);
    const [isAddProductOpen, setIsAddProductOpen] = useState(false);

    useEffect(() => {
        // Fetch the list of products
        axios.post("/product")
            .then(response => {
                setProducts(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching product list:", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/product/${id}`)
            .then(() => {
                setProducts((prev) => prev.filter(product => product._id !== id));
            })
            .catch(error => {
                console.error("Error deleting product:", error);
            });
    };

    const handleEdit = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product._id === id ? { ...product, isEditable: !product.isEditable } : product
            )
        );
    };

    const handleAddProductOpen = () => setIsAddProductOpen(true);
    const handleAddProductClose = () => setIsAddProductOpen(false);

    return (
        <Box style={styles.container}>
            <Button
                style={styles.addButton}
                variant="contained"
                color="primary"
                onClick={handleAddProductOpen}
            >
                Add New Shirt
            </Button>
            <Typography style={styles.sectionTitle} variant="h5">Product List</Typography>
            {products.map(product => (
                <Box key={product._id} style={styles.item}>
                    <TextField
                        value={product.productType}
                        disabled={!product.isEditable}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={product.color.join(", ") || "N/A"}
                        disabled={!product.isEditable}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={product.size.join(", ") || "N/A"}
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
                        onClick={() => handleEdit(product._id)}
                    />
                    <Delete
                        style={{ cursor: "pointer" }}
                        color="error"
                        onClick={() => handleDelete(product._id)}
                    />
                </Box>
            ))}
            <AddProduct open={isAddProductOpen} onClose={handleAddProductClose} />
        </Box>
    );
};

export default ShirtList;
