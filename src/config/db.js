const mongoose = require("mongoose")

function connectToDB () {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("connected to mongodb");
    })
    .catch(err => {
        console.log("error to connect mongodb", err)
        process.exit(1)
    })
}

module.exports = connectToDB