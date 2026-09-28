// const Donation = require("../Model/DonationModel");

// const createDonation = async (req, res) => {
//     try {
//         const donation = new Donation(req.body);

//         await donation.save();

//         res.send({
//             message: "Donation saved successfully",
//             data: donation
//         });
//     } catch (error) {
//         res.status(500).send({
//             message: "Error saving donation"
//         });
//     }
// };

// const findDonors = async (req, res) => {
//     try {
//         const donors = await Donation.find({
//             bloodGroup: req.query.bloodGroup,
//             city: req.query.city
//         });

//         res.send(donors);
//     } catch (error) {
//         res.status(500).send({
//             message: "Error finding donors"
//         });
//     }
// };

// module.exports = { createDonation, findDonors };


const Donation = require("../Model/DonationModel");

const createDonation = async (req, res) => {
    try {

        const donation = new Donation(req.body);

        const result = await donation.save();

        res.send({
            message: "Donation saved successfully",
            data: result
        });
    } catch (error) {
        res.status(500).send({
            message: "Error saving donation"
        });
    }
};

const findDonors = async (req, res) => {
    try {
        const donors = await Donation.find();

        res.send(donors);
    } catch (error) {
        res.status(500).send({
            message: "Error finding donors"
        });
    }
};


const findSpecificDonors = async (req, res) => {
    try {

        const {blood}= req.params;

        const donors = await Donation.find({
           bloodGroup: blood
        });

        res.status(200).json({
            success:true,
            data:donors
        });
    } catch (error) {
        res.status(500).send({
            message: "Error finding donors"
        });
    }
};
module.exports = { createDonation, findDonors,findSpecificDonors };