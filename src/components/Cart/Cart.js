import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { removeFromCart, updateQuantity } from "../../features/cartSlice";
import cartStyles from "./cartStyle";
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleIncreaseQuantity = (id, currentQuantity) => {
        dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
    };

    const handleDecreaseQuantity = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
        }
    };

    const handlePlaceOrder = () => {
        navigate("/order");
    };

    const totalCartValue = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Box sx={cartStyles.container}>
            <Typography variant="h4" sx={cartStyles.title}>Your Cart</Typography>
            {cartItems.length === 0 ? (
                <Typography variant="body1" sx={cartStyles.emptyMessage}>Your cart is empty</Typography>
            ) : (
                <Box sx={cartStyles.itemsContainer}>
                    {cartItems.map((item) => (
                        <Box key={item._id} style={cartStyles.cartItem}>
                            <img
                                src={`data:image/jpeg;base64,${item.photo}`}
                                alt={item.productType}
                                style={{ width: "50px", height: "50px", marginRight: "10px" }}
                            />
                            <Typography style={cartStyles.cartItemText}>{item.productType}</Typography>
                            <Typography style={cartStyles.cartItemText}>&#8377; {item.price}</Typography>
                            <Typography style={cartStyles.cartItemText}>Size: {item.size.join(", ")}</Typography>
                            <Box style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                                <Remove
                                    onClick={() => handleDecreaseQuantity(item._id, item.quantity)}
                                    style={{ cursor: "pointer", marginRight: "5px" }}
                                />
                                <Typography>{item.quantity}</Typography>
                                <Add
                                    onClick={() => handleIncreaseQuantity(item._id, item.quantity)}
                                    style={{ cursor: "pointer", marginLeft: "5px" }}
                                />
                            </Box>
                            <Typography style={{ marginRight: "20px" }}>
                                Total: &#8377; {item.price * item.quantity}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleRemoveItem(item._id)}
                            >
                                Remove
                            </Button>
                        </Box>
                    ))}
                </Box>
            )}
            {cartItems.length > 0 && (
                <Box style={{ marginTop: "20px", textAlign: "right" }}>
                    <Typography variant="h6">
                        Total Cart Value: &#8377; {totalCartValue}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: "10px" }}
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Cart;
