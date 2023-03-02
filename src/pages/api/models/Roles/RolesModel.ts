import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../../sql/connect';
// import User from './UserModel';


const Roles = sequelize.define('Roles', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    length: 30
  },
}, {
  freezeTableName: true
});
// Rol.hasMany(User);

// `sequelize.define` also returns the model
console.log(Roles === sequelize.models.Roles); // true

sequelize.sync().then(() => {
  console.log('Roles table created successfully!');

}).catch((error) => {
  console.error('Unable to create table : ', error);
});

export default Roles;