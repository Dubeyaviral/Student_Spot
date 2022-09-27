const express = require('express');
require("dotenv").config();
const authRoutes = require('./routes/adminRoutes')
const cors = require('cors');
// const { propertyRoute } = require('../../client/src/requests/apiRoutes');
const propRoutes = require('./routes/propertyRoutes');

const port = process.env.PORT;


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
require('./database/conn');

app.use('/api/auth',authRoutes);
app.use('/api/property',propRoutes);

const server = app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});