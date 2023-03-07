const { Sequelize } = require('sequelize');
import config from '../utils/config';

const poolConnection ={
  user: config.sqlConection.user,
  password: config.sqlConection.password,
  server: config.sqlConection.server,
  database: config.sqlConection.database,
  options: {encrypt: false}
}

const sequelize = new Sequelize(poolConnection.database, poolConnection.user, poolConnection.password, {
  host: 'localhost',
  dialect: 'mssql'
});
console.log(config.sqlConection.server);
console.log(config.sqlConection.database);
console.log(config.sqlConection.user);
console.log(config.sqlConection.password);


const connect = async () => {

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');



  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
} 

export default sequelize;