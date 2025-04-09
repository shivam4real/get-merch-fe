const productStyles = {
    card: {
        maxWidth: 345,
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        backgroundColor: "#f5f5f5",
    },
    image: {
        maxHeight: "100%",
        maxWidth: "100%",
    },
    title: {
        fontWeight: "bold",
        marginBottom: "10px",
    },
    price: {
        color: "#ff5722",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    creator: {
        marginBottom: "10px",
    },
    description: {
        marginBottom: "10px",
        color: "#757575",
    },
    size: {
        marginBottom: "10px",
        color: "#757575",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
    },
    button: {
        flex: 1,
        margin: "0 5px",
    },
};

export default productStyles;