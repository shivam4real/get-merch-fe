import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import tshirt from "../Uploads/tshirt.png";
import productStyles from "./ProductStyle";

const Product = ({ productType, price, creator, description, size, _id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigateToProduct = (id) => {
        navigate(`/product/${id}`);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ productType, price, creator, description, size, _id }));
    };

    return (
        <Card sx={productStyles.card}>
            <CardContent>
                <Box sx={productStyles.imageContainer}>
                    <img src={tshirt} alt="T-Shirt" style={productStyles.image} />
                </Box>
                <Typography variant="h6" component="h2" sx={productStyles.title}>
                    {productType}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={productStyles.price}>
                    &#8377; {price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={productStyles.creator}>
                    Created by: {creator}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={productStyles.description}>
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={productStyles.size}>
                    Size: {size}
                </Typography>
                <Box sx={productStyles.buttonContainer}>
                    <Button variant="contained" sx={productStyles.button} onClick={() => handleNavigateToProduct(_id)}>
                        Buy Now
                    </Button>
                    <Button variant="outlined" sx={productStyles.button} onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Product;
