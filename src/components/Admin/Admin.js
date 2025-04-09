import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ShirtList from "./ShirtList";
import UserList from "./UserList";
import adminStyles from "./adminStyle";

const Admin = () => {
    const [selectedSection, setSelectedSection] = useState("shirts");

    const renderSection = () => {
        switch (selectedSection) {
            case "shirts":
                return <ShirtList />;
            case "users":
                return <UserList />;
            default:
                return null;
        }
    };

    return (
        <Box style={{ display: "flex", height: "100vh" }}>
            <Box style={{ ...adminStyles.sidebar, width: "20%", padding: "20px", borderRight: "1px solid #ccc" }}>
                <Typography variant="h5" style={adminStyles.sectionTitle}>Admin Options</Typography>
                <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Button style={adminStyles.sidebarButton} onClick={() => setSelectedSection("shirts")}>
                        Manage Shirts
                    </Button>
                    <Button style={adminStyles.sidebarButton} onClick={() => setSelectedSection("users")}>
                        Manage Users
                    </Button>
                </Box>
            </Box>
            <Box style={{ flex: 1, padding: "20px" }}>
                {renderSection()}
            </Box>
        </Box>
    );
};

export default Admin;
