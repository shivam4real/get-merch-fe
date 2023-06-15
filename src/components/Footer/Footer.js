import { Box, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "yellow", padding: "1rem", marginTop: "10px" }}>
            <Typography variant="h" component="h2">
                &copy; {new Date().getFullYear()} Get Merch. All rights
                reserved.
            </Typography>
        </Box>
    )
}

export default Footer
