import { Box, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "#f0f0f0", padding: "1rem" }}>
            <Typography variant="h" component="h2">
                &copy; {new Date().getFullYear()} Get Merch. All rights
                reserved.
            </Typography>
        </Box>
    )
}

export default Footer
