//COMMENT: ROUTING file
import express from 'express';
import mongoose from "mongoose";

import Product from '../models/product.model.js';
import { deleteProduct, updateProduct,createProduct, getProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

//COMMENT: Put Methods
router.put("/:id", updateProduct)

//COMMENT: delete products
router.delete("/:id", deleteProduct);


export default router;