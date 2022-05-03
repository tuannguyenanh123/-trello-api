import express from 'express';

import { HttpStatusCode } from '../../utilities/Constants';
import { boardRoutes } from './board.route';
import { cardRoutes } from './card.route';
import { columnRoutes } from './column.route';

const router = express.Router()

//Get v1/status
router.get('/status', (req, res) => {
    res.status(HttpStatusCode.OK).json({
        status: 'Ok'
    })
})
 
// board api
router.use('/boards',boardRoutes)
// column api
router.use('/columns',columnRoutes)
// card api
router.use('/cards',cardRoutes)

export const apiV1 = router




