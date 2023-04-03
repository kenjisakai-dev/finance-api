import Movement from '../model/movement.model.js';

async function insertMovement(movement) {
  try {
    return await Movement.create(movement);
  } catch (err) {
    throw err;
  }
}

async function getMovements() {
  try {
    return await Movement.findAll();
  } catch (err) {
    throw err;
  }
}

async function getMovement(movementId) {
  try {
    return await Movement.findByPk(movementId);
  } catch (err) {
    throw err;
  }
}

async function updateMovement(movement) {
  try {
    await Movement.update(movement, {
      where: {
        movementId: movement.movementId,
      },
    });
    return await getMovement(movement.movementId);
  } catch (err) {
    throw err;
  }
}

async function deleteMovement(movementId) {
  try {
    const movement = await getMovement(movementId);
    await Movement.destroy({
      where: {
        movementId,
      },
    });
    return movement;
  } catch (err) {
    throw err;
  }
}

export default {
  insertMovement,
  getMovements,
  getMovement,
  updateMovement,
  deleteMovement,
};
