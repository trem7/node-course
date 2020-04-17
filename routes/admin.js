const path = require('path');

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// GET Routes
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// POST Routes
router.post('/add-product', adminController.postAddProduct);

module.exports = router;