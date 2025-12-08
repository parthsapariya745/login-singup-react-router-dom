const { Product } = require("../model/UserModel");

exports.handleAddProduct = async (req, res) => {
    try {
        const { productName, productURL, productPrice, productDescription } = req.body;

        if (!productName || !productURL || !productPrice || !productDescription) {
            res.status(404).json({ success: false, message: "All Fields require" });
        }

        const existingProuduct = await Product.findOne({ productName })
        if (existingProuduct) {
            res.status(404).json({ success: false, message: "Product already added" });
        }

        const productData = await Product.create({ productName, productURL, productPrice, productDescription })

        res.status(200).json({ message: true, message: "product add successfully", productData })
    } catch (error) {
        res.status(500).json({ message: false, message: "server error", error });
    }
};

exports.handleGetAllProduct = async (req, res) => {
    try {
        const allProductData = await Product.find();
        res.status(200).json({ message: true, allProductData });
    } catch (error) {
        res.status(500).json({ message: false, message: "server error", error });
    }
};

exports.handleGetProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const productData = await Product.findById(id);
        if (!productData) {
            res.status(404).json({ success: false, message: "Product Not Found" });
        }

        res.status(200).json({ message: true, productData });
    } catch (error) {
        res.status(500).json({ message: false, message: "server error", error });
    }
};

exports.handleUpdateProuduct = async (req, res) => {
    try {
        const { productName, productURL, productPrice, productDescription } = req.body;
        const id = req.params.id;

        if (!productName || !productURL || !productPrice || !productDescription) {
            res.status(404).json({ success: false, message: "All Fields require" });
        }

        const productData = await Product.findByIdAndUpdate(
            id,
            { productName, productURL, productPrice, productDescription },
            {
                new: true,
                runValidators: true,
            }
        );
        if (!productData) {
            res.status(404).json({ success: false, message: "Product Not Found" });
        }

        res.status(200).json({ message: true, productData });
    } catch (error) {
        res.status(500).json({ message: false, message: "server error", error });
    }
};

exports.handleDeleteProduct = async (req, res) => {
    try {
        const id = req.params.id

        const productData = await Product.findByIdAndDelete(id)
        if (!productData) {
            res.status(404).json({ success: false, message: "Product Not Found" })
        }

        res.status(200).json({ message: true, productData })
    } catch (error) {
        res.status(500).json({ message: false, message: "server error", error });
    }
}