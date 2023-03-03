import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../sql/connect';

class Enterprises extends Model {}

Enterprises.init({
  // Model attributes are defined here
  NIT: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  enterpriseName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, 
{
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Enterprises' // We need to choose the model name
});

// the defined model is the class itself
console.log(Enterprises === sequelize.models.Enterprises); // true