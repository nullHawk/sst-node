const router = require("express").Router();
const productController = require("../controllers/productController"); 

router.post("/", productController.createProduct);
 
router.get('/', productController.getAllProcuts);
 
router.get('/:id', productController.getById);
 
router.put('/:id', productController.updatedProduct);
 
router.delete('/:id', productController.deleteProduct);

module.exports = router;