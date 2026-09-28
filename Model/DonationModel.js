const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    name: String,
    bloodGroup: String,
    phone: String,
    city: String
});

module.exports = mongoose.model("Donation", donationSchema);