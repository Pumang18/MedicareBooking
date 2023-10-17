import {updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor} from '../Controllers/doctorController.js';

import { authenticate,restrict } from '../auth/verifyToken.js';

import reviewRouter from './review.js'


import  express from 'express'

const router=express.Router()

//nested routes
router.use('/:doctorId/reviews',reviewRouter)

router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor)
router.delete('/:id',authenticate,restrict(["doctor"]),deleteDoctor)

export default router;