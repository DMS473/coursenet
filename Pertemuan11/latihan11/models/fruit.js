'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fruit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fruit.belongsTo(models.Categorie)
      Fruit.belongsTo(models.Brand)
    }
  }
  Fruit.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    CategorieId: DataTypes.INTEGER,
    BrandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fruit',
  });
  return Fruit;
};