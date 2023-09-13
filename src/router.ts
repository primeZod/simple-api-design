import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { handleErrors } from './modules/middleware'
import { UPDATE_STATUS } from '@prisma/client'
import { createProduct, getOneProduct, getProducts } from './handlers/product'
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update'

const router = Router()

router.get('/product', getProducts);
router.get('/product/:id', () => {})
router.put('/product/:id', body("name").isString(), handleErrors, (req, res) => {
  
})
router.post('/product', body("name").isString(), handleErrors, createProduct);
router.delete('/product/:id', () => {})



router.get('/update', () => getUpdates)
router.get('/update/:id', () => getOneUpdate)
router.put('/update/:id', 
           body('title').optional(),
           body('body').optional(),
           body('status').isIn(Object.keys(UPDATE_STATUS).filter(val => isNaN(Number(val)))),
           body('version').optional(),
           updateUpdate )
router.post('/update', 
           body('title').exists().isString(),
           body('body').exists().isString(),
           body('productId').exists().isString(),
           createUpdate ) 
router.delete('/update/:id', deleteUpdate)


router.get('/updatepoint', () => {})
router.get('/updatepoint/:id',() => {})
router.put('/updatepoint/:id',
           body('name').optional().isString(),
           body('description').optional().isString(),
           () => {})
router.post('/updatepoint', 
           body('name').isString(),
           body('description').isString(),
           body('updateId').exists().isString(),
           () => {})
router.delete('/updatepoint/:id', () => {})

export default router
