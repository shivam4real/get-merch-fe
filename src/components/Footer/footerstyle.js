const footerStyles = {
    container: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    linksContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
    },
    link: {
        fontSize: "14px",
        textDecoration: "none",
        color: "#ccc",
        '&:hover': {
            color: "#fff",
        },
    },
    socialMediaContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "15px",
    },
    socialIcon: {
        fontSize: "24px",
        color: "#ccc",
        cursor: "pointer",
        '&:hover': {
            color: "#fff",
        },
    },
    newsletterContainer: {
        marginTop: "20px",
    },
    newsletterText: {
        fontSize: "14px",
        marginBottom: "10px",
    },
    newsletterForm: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
    },
    newsletterInput: {
        width: "250px",
    },
    newsletterButton: {
        backgroundColor: "#555",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#777",
        },
    },
};

export default footerStyles;