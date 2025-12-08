import axios from "axios"
import { useEffect, useState } from "react"

const Product = () => {
    let [productBox, setProductBox] = useState([])

    useEffect(() => {
        let handleGetProduct = async () => {
            try {
                const res = await axios.get("http://localhost:5000/app/product/getAllProduct");
                setProductBox(res.data.allProductData);
            } catch (error) {
                console.log("Products error", error);
            }
        }

        handleGetProduct()
    }, [])

    return (
        <div className="product-container">
            <h1 className="main-title">Our Featured Products</h1>
            <div className="product-box">
                {productBox.map((e, i) => {
                    return (
                        <div key={i} className="product-card">
                            <img src={e.productURL} alt="" />
                            <div className="card-content">
                                <h1 className="product-title">Name: {e.productName}</h1>
                                <p className="product-price">Price: ₹{e.productPrice}</p>
                                <span className="product-desc">Description: {e.productDescription}</span>
                                <div className="button-group">
                                    <button className="add-to-cart" type="button">
                                        <span className="btn-text">Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Product