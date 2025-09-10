const Product = () => {
    let products = JSON.parse(localStorage.getItem("products")) || []
    return (
        <div className="product-container">
            <h1 className="main-title">Our Featured Products</h1>
            <div className="product-box">
                {products.map((e, i) => {
                    return (
                        <div key={i} className="product-card">
                            <img src={e.productURL} alt="" />
                            <div className="card-content">
                                <h1 className="product-title">Name: {e.productName}</h1>
                                <p className="product-price">Price: ₹{e.productPrice}</p>
                                <span className="product-desc">Description: {e.productDescription}</span>
                                <button className="add-to-cart" type="button">
                                    <span className="btn-text">Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Product