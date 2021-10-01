const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.DB_CONNECT;
var _db;

module.exports = {
    conDB: async ()=>{
        const mClient = new MongoClient(uri);  
        try {
                // Connect to the MongoDB cluster
            client = await mClient.connect();
            _db = client.db("stregdb");
            return _db;

         
        } catch (e) {
            console.error(e);
        }
    },

      
   

}

//module.exports = conDB;





