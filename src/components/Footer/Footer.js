import { Box, Typography, TextField, Button } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import footerStyles from "./footerstyle";

const Footer = () => {
    return (
        <Box id="footer" sx={footerStyles.container}>
            <Typography variant="h6" component="h2" sx={footerStyles.title}>
                &copy; {new Date().getFullYear()} Get Merch. All rights reserved.
            </Typography>
            <Box sx={footerStyles.linksContainer}>
                <Typography variant="body2" component="p" sx={footerStyles.link}>
                    Contact Us: support@getmerch.com
                </Typography>
                <Typography variant="body2" component="p" sx={footerStyles.link}>
                    Phone: +1-800-555-1234
                </Typography>
                <Typography variant="body2" component="p" sx={footerStyles.link}>
                    Address: 123 Merch Lane, T-Shirt City, TX
                </Typography>
            </Box>
            <Box sx={footerStyles.socialMediaContainer}>
                <Facebook sx={footerStyles.socialIcon} />
                <Twitter sx={footerStyles.socialIcon} />
                <Instagram sx={footerStyles.socialIcon} />
            </Box>
            <Box sx={footerStyles.newsletterContainer}>
                <Typography variant="body2" component="p" sx={footerStyles.newsletterText}>
                    Subscribe to our newsletter:
                </Typography>
                <Box sx={footerStyles.newsletterForm}>
                    <TextField placeholder="Enter your email" size="small" sx={footerStyles.newsletterInput} />
                    <Button variant="contained" sx={footerStyles.newsletterButton}>Subscribe</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
