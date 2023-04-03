import MovementRepository from '../repositories/movement.repository.js';

async function createMovement(movement) {
  return await MovementRepository.insertMovement(movement);
}

async function getMovements() {
  const movement = await MovementRepository.getMovements();
  if (movement.length === 0) {
    throw new Error('Não existe informações na tabela movements.');
  }
  return movement;
}

async function getMovement(movementId) {
  const movement = await MovementRepository.getMovement(movementId);
  if (!movement) {
    throw new Error('O Movement ID informado não existe.');
  }
  return movement;
}

async function updateMovement(movement) {
  await getMovement(movement.movementId);
  return await MovementRepository.updateMovement(movement);
}

async function deleteMovement(movementId) {
  await getMovement(movementId);
  return await MovementRepository.deleteMovement(movementId);
}

export default {
  createMovement,
  getMovements,
  getMovement,
  updateMovement,
  deleteMovement,
};
