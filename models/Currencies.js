import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/sequelize.js';

class Currencies extends Model {

}

Currencies.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.CHAR(3),
    allowNull: false,
  },
  rate: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'currencies',
  modelName: 'Currencies',
});

export default Currencies;
