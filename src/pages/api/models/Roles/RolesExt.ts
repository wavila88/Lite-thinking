import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../sql/connect';

class Roles extends Model {}

Roles.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, 
{
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Roles' // We need to choose the model name
});

// the defined model is the class itself
console.log(Roles === sequelize.models.Roles); // true