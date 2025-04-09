import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { removeFromCart, updateQuantity } from "../../features/cartSlice";
import cartStyles from "./cartStyle";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handlePlaceOrder = () => {
        navigate("/order");
    };

    return (
        <Box sx={cartStyles.container}>
            <Typography variant="h4" sx={cartStyles.title}>Your Cart</Typography>
            {cartItems.length === 0 ? (
                <Typography variant="body1" sx={cartStyles.emptyMessage}>Your cart is empty</Typography>
            ) : (
                <Box sx={cartStyles.itemsContainer}>
                    {cartItems.map((item) => (
                        <Box key={item._id} sx={cartStyles.item}>
                            <Typography variant="h6" sx={cartStyles.itemName}>{item.productType}</Typography>
                            <Typography variant="body2" sx={cartStyles.itemPrice}>&#8377; {item.price}</Typography>
                            <Box sx={cartStyles.quantityContainer}>
                                <Button onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>-</Button>
                                <Typography variant="body2" sx={cartStyles.quantity}>{item.quantity}</Typography>
                                <Button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}>+</Button>
                            </Box>
                            <IconButton onClick={() => handleRemoveItem(item._id)}>
                                <Delete />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            )}
            {cartItems.length > 0 && (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: "20px" }}
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </Button>
            )}
        </Box>
    );
};

export default Cart;
