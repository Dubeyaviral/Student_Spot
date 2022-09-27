const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
    titleoff: {
        type: String,
        required: true,
        min: 5,
    },
    typeoff:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true,
        min: 10,
    },
    owner:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required:true,
        min: 10,
    },
    rent:{
        type: String,
        required: true,
    },
    security:{
        type: String,
        required: true,
    },
    ownerid:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Property", PropertySchema);
