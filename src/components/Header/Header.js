import {
    Box,
    Typography,
    AppBar,
    CssBaseline,
    Menu,
    Tooltip,
    IconButton,
    Avatar,
    MenuItem,
    Container,
    Button,
    Badge,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import headerStyles from "./headerStyle";
import { useSelector } from "react-redux";

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);
    const isAdmin = useSelector((state) => state.user.isAdmin);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };
    const goToCart = () => {
        navigate("/cart");
    };
    const goToProfile = () => {
        navigate("/profile");
    };
    const handleScrollToFooter = () => {
        const footerElement = document.getElementById("footer");
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AppBar position="static" sx={headerStyles.appBar}>
            <Container maxWidth="xl">
                <Box sx={headerStyles.container}>
                    <CssBaseline />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={headerStyles.brandName}
                        onClick={() => navigate("/")}
                    >
                        Get Merch
                    </Typography>
                    <Box sx={headerStyles.navButtons}>
                        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                        <Button color="inherit" onClick={handleScrollToFooter}>Contact Us</Button>
                        {isAdmin && (
                            <Button color="inherit" onClick={() => navigate("/admin")}>Admin</Button>
                        )}
                        <IconButton onClick={goToCart} sx={headerStyles.cartButton}>
                            <Badge badgeContent={cartItems.length} color="secondary">
                                <ShoppingCartIcon color="secondary" />
                            </Badge>
                        </IconButton>
                        <Box sx={headerStyles.profileMenu}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={headerStyles.avatar}
                                >
                                    <Avatar
                                        alt="Profile Picture"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={headerStyles.menu}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={goToProfile}>
                                    <Typography textAlign="center">View Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </AppBar>
    );
};

export default Header;
