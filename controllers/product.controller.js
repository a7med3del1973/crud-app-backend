const Product = require("../models/product.model");

const getProudcts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProudct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
    if (!product) {
      res.status(404).json({ message: "Product not found 404 !" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProudct = await Product.findById(id);

    res.status(200).json(updatedProudct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "The product not found ." });
    }

    res.status(200).json({ message: "The Product deleted sucessfully ." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProudcts,
  getProudct,
  createProduct,
  updateProduct,
  deleteProduct,
};
