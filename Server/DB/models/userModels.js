const mongoose = require('mongoose');

// var url = 'mongodb+srv://SafeMeProject:1234@cluster0.vteyi.mongodb.net/test';
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected successfully to MongoDB!'))
//     .catch(err => console.error('Something went wrong', err));


//  Defining schema for a user
const userSchema = new mongoose.Schema({
    userName: String,
    pasword: String,
    age: String,
    Role: String,
    economicVoilence: String,
    emotionalVoilence: String,
    kids: String,
    phychologicalVoilence: String,
    physicalVoilence: String,
    region: String,
    sexualVoilence: String,
    status: String,

});

const user = mongoose.model('user', userSchema);

module.exports = {
    user
}