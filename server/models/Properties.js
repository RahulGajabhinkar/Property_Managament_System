const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
    landmark: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Properties', propertySchema);
