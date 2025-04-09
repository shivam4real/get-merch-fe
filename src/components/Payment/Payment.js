import React, { useState } from "react";
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const navigate = useNavigate();

    const handlePayment = () => {
        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }
        alert(`Payment method selected: ${paymentMethod}`);
        navigate("/confirmation"); // Navigate to confirmation or success page
    };

    return (
        <Box sx={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                Select Payment Method
            </Typography>
            <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                sx={{ marginBottom: "20px" }}
            >
                <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
                <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
            </RadioGroup>
            <Button
                variant="contained"
                color="primary"
                onClick={handlePayment}
                sx={{ display: "block", margin: "0 auto" }}
            >
                Proceed to Pay
            </Button>
        </Box>
    );
};

export default Payment;