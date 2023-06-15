import ProductList from "../Product/ProductList"
import { Box } from "@mui/material"
const MainContainer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#f1f3f6",
                padding: "1rem",
                height: "1000px",
                marginTop: "100px",
            }}
        >
            <ProductList />
        </Box>
    )
}

export default MainContainer
