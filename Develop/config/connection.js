require("dotenv").config();
//Sequelize instance that will connect the DB
const Sequelize = require("sequelize");
//option 3: Passing parameters separately (other dialects);
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
