const router = require("express").Router();
const productController = require("../controllers/productController"); 

router.post("/api/products", productController.createProduct);
 
router.get('/api/products', productController.getAllProcuts);
 
router.get('/api/products/:id', productController.getById);
 
router.put('/api/products/:id', productController.updatedProduct);
 
router.delete('/api/products/:id', productController.deleteProduct);
 