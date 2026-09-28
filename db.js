const mongoose = require("mongoose");

mongoose.connect("mongodb://sudharshan:1234qwer@ac-l81nuvl-shard-00-00.ojf9pez.mongodb.net:27017,ac-l81nuvl-shard-00-01.ojf9pez.mongodb.net:27017,ac-l81nuvl-shard-00-02.ojf9pez.mongodb.net:27017/BloodDonation?ssl=true&replicaSet=atlas-xamb68-shard-0&authSource=admin&appName=Cluster0")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

    module.exports = mongoose;