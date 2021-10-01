const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');


dotenv.config();

//middleware
app.use(express.json());

//routes
app.use('/api/user/', authRoute);

app.listen(process.env.PORT);

