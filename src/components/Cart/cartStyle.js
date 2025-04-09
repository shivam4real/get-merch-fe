const cartStyles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
    },
    title: {
        marginBottom: "20px",
        textAlign: "center",
    },
    emptyMessage: {
        textAlign: "center",
        color: "#757575",
    },
    itemsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
    },
    itemName: {
        fontWeight: "bold",
    },
    itemPrice: {
        color: "#ff5722",
    },
    quantityContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    quantity: {
        minWidth: "30px",
        textAlign: "center",
    },
};

export default cartStyles;