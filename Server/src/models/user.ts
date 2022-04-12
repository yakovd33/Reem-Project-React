const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    isFirstTime: { type: Boolean, default: true },
    username: String,
    password: String,
    age: Number,
    Role: String,
    kids: Number,
    region: String,
    status: String,
    isEmotionalViolence: { type: Boolean, default: false },
    isPsycologicalViolence: { type: Boolean, default: false },
    isPysicalViolence: { type: Boolean, default: false },
    isSexualViolence: { type: Boolean, default: false },
    isEconimicViolence: { type: Boolean, default: false },
});

const user = mongoose.model('user', userSchema);
export default user;