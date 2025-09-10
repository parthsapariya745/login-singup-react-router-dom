import { useState } from "react"

const Product = () => {
    let [productBox, setProductBox] = useState(JSON.parse(localStorage.getItem("products")) || [])

    let handleDelete = (i) => {
        setProductBox(productBox.filter((_, j) => i !== j))
        localStorage.setItem("products", JSON.stringify(productBox.filter((_, j) => i !== j)))
    }

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

                                    <button className="edit-btn" type="button">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 20h9" stroke="#0B66FF" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
                                                stroke="#0B66FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <button className="delete-btn" type="button" onClick={() => handleDelete(i)}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M3 6h18" stroke="#e63946" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8 6V4h8v2" stroke="#e63946" strokeWidth="2" />
                                            <path d="M19 6l-1 14H6L5 6" stroke="#e63946" strokeWidth="2" strokeLinecap="round" />
                                            <line x1="10" y1="10" x2="10" y2="17" stroke="#e63946" strokeWidth="2" strokeLinecap="round" />
                                            <line x1="14" y1="10" x2="14" y2="17" stroke="#e63946" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
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