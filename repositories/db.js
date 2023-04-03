import Sequelize from 'sequelize';

const sequelize = new Sequelize('finances', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado com sucesso!');
  })
  .catch((err) => {
    console.log(`Erro: ${err}`);
  });

export default sequelize;
