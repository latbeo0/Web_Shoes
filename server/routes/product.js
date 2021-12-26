const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
const { verifyTokenAndAdmin } = require('../middleware/verifyToken');

// CREATE
router.post('/', verifyTokenAndAdmin, productCtrl.createProduct);

// UPDATE
router.put('/:id', verifyTokenAndAdmin, productCtrl.updateProduct);

// DELETE
router.delete('/:id', verifyTokenAndAdmin, productCtrl.deleteProduct);

// GET PRODUCT
router.get('/find/:id', productCtrl.getProduct);
// GET ALL PRODUCT
router.get('/', productCtrl.getAllProduct);
// GET PRODUCT BY NAME
router.get('/search/:name', productCtrl.getProductByName);

module.exports = router;
