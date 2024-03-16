const { Model, DataTypes } = require("sequelize");
//sequelize connection (module) coming from connection.js:
const sequelize = require("../config/connection.js");
//model definition extending the model class given from sequelize
class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //other model options go here
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;

//id
//Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
// category_name
// String
// Doesn't allow null values
