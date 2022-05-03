import express from 'express';

import {columnController} from '../../controllers/column.controller'
import { columnValidation } from '../../validations/column.validation';


const router = express.Router()
router.route('/')
    .post(columnValidation.createNew,columnController.createNew)

router.route('/:id')
.put(columnValidation.update,columnController.update) // this cover delete



export const columnRoutes = router

