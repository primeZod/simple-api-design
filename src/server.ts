import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log("Hello from express");
    res.status(200);
    res.json({message: 'hello'})
})

app.use('/api', protect, router)
app.use('/user', createNewUser)
app.use('/signin', signin)

export default app