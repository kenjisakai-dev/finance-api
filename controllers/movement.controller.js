import MovementService from '../services/movement.service.js';

async function createMovement(req, res, next) {
  try {
    let movement = req.body;
    if (
      !movement.month ||
      !movement.movements ||
      !movement.value ||
      !movement.category ||
      !movement.type
    ) {
      throw new Error('O Month, Movements, Value, Category e Type são obrigatórios.');
    }
    res.send(await MovementService.createMovement(movement));
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
}

async function getMovements(req, res, next) {
  try {
    res.send(await MovementService.getMovements());
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
}

async function getMovement(req, res, next) {
  try {
    res.send(await MovementService.getMovement(req.params.id));
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
}

async function updateMovement(req, res, next) {
  try {
    let movement = req.body;
    if (!movement.movementId) {
      throw new Error('O Movement ID é obrigatório.');
    }
    res.send(await MovementService.updateMovement(movement));
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
}

async function deleteMovement(req, res, next) {
  try {
    res.send({
      message: 'O Movement ID foi deletado.',
      movement: await MovementService.deleteMovement(req.params.id),
    });
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
}

export default {
  createMovement,
  getMovements,
  getMovement,
  updateMovement,
  deleteMovement,
};
