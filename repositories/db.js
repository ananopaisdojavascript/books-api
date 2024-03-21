import  Sequelize  from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 32768,
  database: "books_api",
  username: "postgres",
  password: "mysecretpassword",
  define: {
    timestamp: false
  }
})

export default sequelize