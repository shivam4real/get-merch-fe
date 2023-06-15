import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "./Product"

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        try {
            let productRes = await axios.get(`/product/${id}`)
            setProduct(productRes.data.data)
        } catch (err) {
            alert(err)
        }
    }
    return (
        <div>
            <Product {...product} />
        </div>
    )
}

export default ProductDetails
