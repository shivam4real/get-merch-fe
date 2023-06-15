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
} from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const settings = ["Profile", "Logout"]
    const navigate = useNavigate()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
    }
    const goToCart = () => {
        navigate("/cart")
    }
    const handleSelectChange = (value) => {
        if (value === "Logout") {
            handleLogout()
        }
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Box
                    sx={{
                        bgcolor: "#f0f0f0",
                        padding: "1rem",
                        display: "flex",
                    }}
                >
                    <CssBaseline />
                    <Typography variant="h5" noWrap component="a">
                        Get Merch
                    </Typography>
                    <div style={{ marginLeft: "1000px", display: "flex" }}>
                        <IconButton onClick={goToCart}>
                            <ShoppingCartIcon color="secondary" />
                        </IconButton>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
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
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting}
                                        value={setting}
                                        onClick={() =>
                                            handleSelectChange(setting)
                                        }
                                    >
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </div>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Header
