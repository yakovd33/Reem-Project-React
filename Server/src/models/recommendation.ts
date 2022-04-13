const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    region: String,
    address: String,
    type: String
});

const recommendation = mongoose.model('recommendation', recommendationSchema);
export default recommendation;