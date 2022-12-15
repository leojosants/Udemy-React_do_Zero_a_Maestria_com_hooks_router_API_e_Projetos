
// 
const mongoose = require('mongoose');

// connection
const dbUser = process.env.BD_USER;
const dbPassword = process.env.DB_PASS;

// 
const conn = async () => {

    try {
        
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qlkh94c.mongodb.net/?retryWrites=true&w=majority`
        );

        console.log('Conectou ao BD!');

        return dbConn;

    } catch (error) {
        
        console.log(error);

    }

};

conn();

module.exports = conn;