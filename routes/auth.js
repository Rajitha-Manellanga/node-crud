const router = require('express').Router();
const User = require('../models/Users');
const mongoUtil = require('../mongoUtil');

router.post('/register', async (req,res)=>{

    var _db;
    const user = new User(
       
    {
        regno: req.body.regno,
        age: req.body.age,
        name:[{
            fname: req.body.name.fname,
            lname: req.body.name.lname,
        }]
    }
    );

    try {
        const client = mongoUtil.conDB();
         _db = await client;
        const savedUser = await _db.collection('users').insertOne(user);
        console.log(`A document was inserted with the _id: ${savedUser.insertedId}`);
        res.send(user);
        
    } catch (error) {
        console.log(error);
    }finally{
        client.close();
    }


            
})



module.exports = router;