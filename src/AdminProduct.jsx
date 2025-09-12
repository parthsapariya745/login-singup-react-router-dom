import { useState } from "react"

const AdminProduct = () => {
  let [productBox, setProductBox] = useState(JSON.parse(localStorage.getItem("products")) || [])
  let [productName, setProductName] = useState("")
  let [productURL, setProductURL] = useState("")
  let [productPrice, setProductPrice] = useState("")
  let [productDescription, setProductDescription] = useState("")

  let handleAddProduct = () => {
    if (productName && productURL && productPrice && productDescription) {
      let newProducts = [...productBox,{ productName, productURL, productPrice, productDescription }]
      setProductBox(newProducts)
      localStorage.setItem("products", JSON.stringify(newProducts))
      alert("Product Add successfully")
    } else {
      alert("Please fill out Product Details")
    }
    
    setProductName("")
    setProductURL("")
    setProductPrice("")
    setProductDescription("")
  }

  return (
    <div className="admin-box">
      <h1>Product Details</h1>
      <form action="">
        <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName} placeholder="Enter product name" required />
        <input type="text" onChange={(e) => setProductURL(e.target.value)} value={productURL} placeholder="Enter product img URL" required />
        <input type="number" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} placeholder="Enter product price" required />
        <input type="text" onChange={(e) => setProductDescription(e.target.value)} value={productDescription} placeholder="Enter product description" required />
        <button onClick={handleAddProduct}>Add Product</button>
      </form>
    </div>
  )
}
export default AdminProduct