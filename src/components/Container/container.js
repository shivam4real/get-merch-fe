import {
    Box,
    Typography,
    Card,
    CardContent,
    DialogContent,
} from "@mui/material"
import React from "react"

const Container = () => {
    const items = [
        { title: "Item 1", description: "Description 1" },
        { title: "Item 2", description: "Description 2" },
        { title: "Item 3", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
        { title: "Item 4", description: "Description 3" },
    ]
    return (
        <Box
            sx={{
                bgcolor: "#f1f3f6",
                padding: "1rem",
                height: "1000px",
            }}
        >
            {items.map((item, index) => (
                <Card
                    key={index}
                    sx={{
                        margin: "10px",
                        width: "260px",
                        height: "300px",
                        position: "relative",
                        float: "left",
                    }}
                >
                    <CardContent>
                        <DialogContent>
                            <img
                                src="F:/tshirt.png"
                                style={{ maxWidth: "100%" }}
                            />
                        </DialogContent>
                        <Typography variant="h6" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}

export default Container
