import {DataTypes } from 'sequelize';
import sequelize from '../../sql/connect';
// import Rol from './RolModel';

const Inventary = sequelize.define('Inventary', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    length: 40,
    unique: false
  },
  numberProducts: {
    type: DataTypes.STRING,
    allowNull: false,
    length: 30
  },
  enterpriseNIT: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Enterprises', // 'fathers' refers to table name
      key: 'NIT', // 'nit' refers to column name in fathers table
   }
  }
}, {
  freezeTableName: true
});


// `sequelize.define` also returns the model
console.log(Inventary === sequelize.models.Inventary); // true

sequelize.sync().then(() => {
  console.log('Inventary table created successfully!');

}).catch((error : any) => {
  console.error('Unable to create table : ', error);
});

export default Inventary;