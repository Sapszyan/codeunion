import { Model, DataTypes } from 'sequelize';
import sequelize from '../services/sequelize.js';

class Users extends Model {
  static async sync(options) {
    await super.sync(options);
    const exists = await Users.findOne();
    if (!exists) {
      await Users.create({
        name: 'Admin',
        email: 'gHost-admin@mailinator.com',
        password: '25f9e794323b453885f5181f1b624d0b',
      });
    }
  }
}

Users.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'users',
  modelName: 'Users',
});

export default Users;
