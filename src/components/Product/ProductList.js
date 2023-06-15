import React, { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"

const ProductList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        itemList()
    }, [])

    const itemList = async () => {
        try {
            let itemListRes = await axios.post("/product", {})
            setItems(itemListRes.data.data)
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }

    return (
        <div>
            {items.map((item, index) => (
                <Product {...item} />
            ))}
        </div>
    )
}

export default ProductList
