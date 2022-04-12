const usersModels = require('./models/userModels');
const { ObjectId } = require('mongodb');

const user = userModels.User;

//--------------------------------------
// // Update info of a user by its id
// const updateReservation = async (theID, theReservInfoObj) => {
//     const theObjToUpdate = await Reservation.updateOne({ _id: theID }, theReservInfoObj);
//     console.log(`updateReservationByID ${JSON.stringify(theObjToUpdate)}`);
//     return theObjToUpdate.modifiedCount;
// };
// exports.updateReservation = updateReservation;

//--------------------------------------
// Get all users
const getUsersFromDB = async () => {
    const allUsers = await User.find();
    console.log(`getAllUsers ${JSON.stringify(allUsers)}`);
    return JSON.parse(JSON.stringify(allUsers));
};
exports.getUsersFromDB = getUsersFromDB;

//--------------------------------------
// Get info of a user by their userName 
const finduserByUserName = async (userName) => {
    const x = await User.findOne({ userName: userName });
    console.log(`finduserByUserName ${JSON.stringify(x)}`);
    return x;
};
exports.finduserByUserName = finduserByUserName;


//Helping function for addReservation function
//Convert date
function localizeDateStr(date_to_convert_str) {
    var date_to_convert = new Date(date_to_convert_str);
    var local_date = new Date();
    date_to_convert.setHours(date_to_convert.getHours() + (local_date.getTimezoneOffset() / 60));
    return date_to_convert;
}

//--------------------------------------
// Add a reservation 
const addReservation = async (newReservation) => {
    console.log("--", JSON.stringify(newReservation));
    var expirationDate = localizeDateStr(newReservation.date);

    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    // console.log(expirationDate);
    // console.log(new Date());
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

    if (expirationDate < new Date()) {
        return (`That date has already passed!!`);
    } else {
        const newRes = new Reservation(newReservation);
        const x = await newRes.save();
        console.log(`addReservation ${JSON.stringify(x)}`);
        return (`Added new reservation with id ${x._id}`);
    }
};
exports.addReservation = addReservation;

//--------------------------------------
// delete user by userName
const deleteuserByUserName = async (userName) => {

    const x = await User.deleteOne({ userName: userName });
    console.log(`deleteuserByUserName ${JSON.stringify(x)}`);
    // return (`deleted ${x.n} documents`);
    return x.deletedCount;
};
exports.deleteuserByUserName = deleteuserByUserName;