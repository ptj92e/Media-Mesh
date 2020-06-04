require('dotenv').config();
//This module tells the app which database configuration to use depending on the stage of production. 
module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_KEY,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
};