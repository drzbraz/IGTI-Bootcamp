import express from 'express'
import { createGrid } from './../controllers/app-ctrl.js'
const routes = express.Router()

routes.post('/create', createGrid)

export default routes
