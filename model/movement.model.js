import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Movement = db.define(
  'movements',
  {
    movementId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    month: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    movements: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Movement;
