// const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const socketio = require('socket.io');
// const http = require('http');
// const user = require("./DB/models/userModels").user;


// const app = express();

// const server = http.createServer(app);
// const io = socketio(server, {
//     cors: {
//         origin: [""]
//     }
// });

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.use(cors())

// var url = 'mongodb+srv://SafeMeProject:1234@cluster0.vteyi.mongodb.net/test';
// let url = 'mongodb+srv://SafeMeProject:1234@cluster0.vteyi.mongodb.net/Users?retryWrites=true&w=majority';
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected successfully to MongoDB!'))
//     .catch(err => console.error('Something went wrong', err));

// const PORT = process.env.PORT || 4000
// server.listen(PORT)

// module.exports = {
//     io,
// }

///////////////////////////////////////////////////////////////////////////////


// app.get('/test', (req, res) => {
//     console.log("test");
// })

// app.get('/test1', async (req, res) => {
//     console.log("test1");

//     try {
//         const users = await user.find({})
//         console.log("users", users);
//         res.status(200).send({ result: 'success' });
//     } catch (e) {
//         console.log('errorr', e);
//         res.status(401).send({ result: 'error', data: 'Something wrong!' });
//     }
// })
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connetion Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });


const server = app.listen(process.env.PORT, () =>
    console.log(`Server started on ${process.env.PORT}`)
);
