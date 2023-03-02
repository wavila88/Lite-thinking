import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../sql/connect';

class Users extends Model {}

Users.init({
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Users' // We need to choose the model name
});

// the defined model is the class itself
console.log(Users === sequelize.models.Users); // true