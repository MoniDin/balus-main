const { Sequelize } = require('sequelize')
const sequelize = new Sequelize("postgres://user:pass@example")
 
module.exports = sequelize