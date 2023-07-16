import {Sequelize} from "sequelize";
const sequelize = new Sequelize('postgres' ,'postgres', '    ', {
    host: 'localhost',
    dialect:'postgres' 
  });

  async function connectDB(){
    try{
      await sequelize.authenticate();
      console.log("connection has been established")
    }
    catch(error){
      console.log('unable to connect to database',error)
    }
  }

  export {connectDB,sequelize};