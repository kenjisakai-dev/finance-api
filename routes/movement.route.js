import express from 'express';
import MovementController from '../controllers/movement.controller.js';

const router = express.Router();

router.post('/', MovementController.createMovement);
router.get('/', MovementController.getMovements);
router.get('/:id', MovementController.getMovement);
router.put('/', MovementController.updateMovement);
router.delete('/:id', MovementController.deleteMovement);

export default router;
