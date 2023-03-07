import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../../sql/connect';
// import Rol from './RolModel';

const Users = sequelize.define('Users', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    length: 30,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    length: 30
  },
  rol_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Roles', // 'fathers' refers to table name
      key: 'id', // 'id' refers to column name in fathers table
   }
  }
}, {
  freezeTableName: true
});


// `sequelize.define` also returns the model
console.log(Users === sequelize.models.Users); // true

sequelize.sync().then(() => {
  console.log('User table created successfully!');

}).catch((error : any) => {
  console.error('Unable to create table : ', error);
});

export default Users;