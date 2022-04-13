const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    toUsername: { type: String, default: null },
    message: { type: String, required: true },
}, {
    timestamps: true
});

const message = mongoose.model('message', messageSchema);
export default message;