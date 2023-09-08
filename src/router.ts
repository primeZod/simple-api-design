import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { handleErrors } from './modules/middleware'
import { UPDATE_STATUS } from '@prisma/client'
import { createProduct, getOneProduct, getProducts } from './handlers/product'

 const router = Router()

 router.get('/product', getProducts);
 router.get('/product/:id', () => {})
 router.put('/product/:id', body("name").toString(), handleErrors, (req, res) => {
    
 })
 router.post('/product', body("name").toString(), handleErrors, createProduct)
 router.delete('/product/:id', () => {})



 router.get('/update', () => {})
 router.get('/update/:id', () => {})
 router.put('/update/:id', 
            body('title').optional(),
            body('body').optional(),
            body('status').isIn(Object.keys(UPDATE_STATUS).filter(val => isNaN(Number(val)))),
            body('version').optional(),
            () => {})
 router.post('/update', 
            body('title').exists(),
            body('body').exists(),
            () => {})
 router.delete('/update/:id', () => {})

 
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
