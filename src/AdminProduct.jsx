import { useState } from "react"

const AdminProduct = () => {
  let [productBox, setProductBox] = useState(JSON.parse(localStorage.getItem("products")) || [])
  let [productName, setProductName] = useState("")
  let [productURL, setProductURL] = useState("")
  let [productPrice, setProductPrice] = useState("")
  let [productDescription, setProductDescription] = useState("")
  let [btn, setBtn] = useState(true)
  let [index, setIndex] = useState(null)

  localStorage.setItem("products", JSON.stringify(productBox))

  let handleAddOrUpdateProduct = () => {
    if (btn) {
      if (productName && productURL && productPrice && productDescription) {
        let newProducts = [...productBox, { productName, productURL, productPrice, productDescription }]
        setProductBox(newProducts)
        localStorage.setItem("products", JSON.stringify(newProducts))
        alert("Product Add successfully")
      } else {
        alert("Please fill out Product Details")
      }
    }
    else {
      setBtn(true)
      productBox[index] = productName
      productBox[index] = productURL
      productBox[index] = productPrice
      productBox[index] = productDescription
    }

    setProductName("")
    setProductURL("")
    setProductPrice("")
    setProductDescription("")
  }

  let handleEdit = (i) => {
    setProductName(productBox[i].productName)
    setProductURL(productBox[i].productURL)
    setProductPrice(productBox[i].productPrice)
    setProductDescription(productBox[i].productDescription)
    setBtn(false)
    setIndex(i)
  }

  let handleDelete = (i) => {
    setProductBox(productBox.filter((_, j) => i !== j))
    localStorage.setItem("products", JSON.stringify(productBox.filter((_, j) => i !== j)))
  }

  return (
    <>
      <div className="admin-box">
        <h1>Product Details</h1>
        <form action="">
          <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName} placeholder="Enter product name" required />
          <input type="text" onChange={(e) => setProductURL(e.target.value)} value={productURL} placeholder="Enter product img URL" required />
          <input type="number" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} placeholder="Enter product price" required />
          <input type="text" onChange={(e) => setProductDescription(e.target.value)} value={productDescription} placeholder="Enter product description" required />
          <button onClick={handleAddOrUpdateProduct}>{btn ? "Add" : "Update"} Product</button>
        </form>
      </div>

      <div className="product-box" style={{marginBlock: "40px", paddingInline: "3vw"}}>
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

                  <button className="edit-btn" type="button" onClick={() => handleEdit(i)}>
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
    </>
  )
}
export default AdminProduct