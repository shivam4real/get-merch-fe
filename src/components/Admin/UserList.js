import React, { useEffect, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import axios from "axios";
import adminStyles from "./adminStyle";
// import EditIcon from "@mui/icons-material/Edit";
import { Delete } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState({});

    useEffect(() => {
        // Fetch the list of users
        axios.get("/user/getUserList")
            .then(response => {
                setUsers(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching user list:", error);
            });
    }, []);

    const handleEdit = (id) => {
        setEditMode((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleDelete = (id) => {
        axios.delete(`/user/deleteUser/${id}`)
            .then(() => {
                setUsers((prev) => prev.filter(user => user._id !== id));
            })
            .catch(error => {
                console.error("Error deleting user:", error);
            });
    };

    return (
        <Box style={adminStyles.container}>
            <Typography style={adminStyles.sectionTitle} variant="h5">User List</Typography>
            {users.map(user => (
                <Box key={user._id} style={adminStyles.item}>
                    <TextField
                        value={user.firstName}
                        disabled={!editMode[user._id]}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={user.lastName}
                        disabled={!editMode[user._id]}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={user.email}
                        disabled={!editMode[user._id]}
                        style={{ marginRight: "10px" }}
                    />
                    <TextField
                        value={user.mobile}
                        disabled={!editMode[user._id]}
                        style={{ marginRight: "10px" }}
                    />
                    <Edit
                        style={{ cursor: "pointer", marginRight: "10px" }}
                        color="secondary"
                        onClick={() => handleEdit(user._id)}
                    />
                    <Delete
                        style={{ cursor: "pointer" }}
                        color="error"
                        onClick={() => handleDelete(user._id)}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default UserList;
