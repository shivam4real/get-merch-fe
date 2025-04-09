import React from "react"
import Product from "./Product"
import LoadingIcon from "../Loading/Loading"
import axios from "axios"
import productListStyles from "./ProductListStyle";

const ProductList = () => {

    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(null)  
   
    
    React.useEffect(() => {
        
        const fetchData = async () => {
           
            try {
                const response = await axios.post("/product")
                setData(response.data.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
        // console.log(data);
        
    }, [])
    

    return (
        <>
            {isLoading ? (
                <LoadingIcon />
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div style={productListStyles.container}>
                    {data?.map((item, index) => (
                        <Product key={index} {...item} />
                    ))}
                </div>
            )}
        </>
    )
}

export default ProductList
