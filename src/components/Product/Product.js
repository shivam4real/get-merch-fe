import { Card, CardContent, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import tshirt from "../Uploads/tshirt.png"

const Product = ({ productType, price, creator, _id }) => {
    const navigate = useNavigate()
    const handleNavigateToProduct = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <Card
            sx={{
                margin: "10px",
                width: "260px",
                height: "350px",
                position: "relative",
                float: "left",
            }}
            onClick={() => handleNavigateToProduct(_id)}
        >
            <CardContent>
                <div>
                    <img
                        src={tshirt}
                        alt="Uploaded"
                        width="200px"
                        height="200px"
                    />
                </div>
                <Typography variant="h6" component="h2">
                    {productType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    &#8377; {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {creator}
                </Typography>
                <Button type="submit" variant="contained">
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    )
}

export default Product
