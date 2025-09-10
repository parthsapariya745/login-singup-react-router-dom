import { useState } from "react"

const AdminProduct = () => {
  let [productBox, setProductBox] = useState(JSON.parse(localStorage.getItem("products")) || [])
  let [productName, setProductName] = useState("")
  let [productURL, setProductURL] = useState("")
  let [productPrice, setProductPrice] = useState("")
  let [productDescription, setProductDescription] = useState("")

  let handleAddProduct = () => {
    let newProducts = [...productBox,{ productName, productURL, productPrice, productDescription }]
    setProductBox(newProducts)
    localStorage.setItem("products", JSON.stringify(newProducts))
    
    setProductName("")
    setProductURL("")
    setProductPrice("")
    setProductDescription("")
  }

  return (
    <div className="admin-box">
      <h1>Product Details</h1>
      <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName} placeholder="Enter product name" />
      <input type="text" onChange={(e) => setProductURL(e.target.value)} value={productURL} placeholder="Enter product img URL" />
      <input type="number" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} placeholder="Enter product price" />
      <input type="text" onChange={(e) => setProductDescription(e.target.value)} value={productDescription} placeholder="Enter product description" />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  )
}
export default AdminProduct