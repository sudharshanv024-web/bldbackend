// const express = require("express");
// const { createDonation } = require("../Controller/DonationController");

// const router = express.Router();

// router.post("/donate", createDonation);

// module.exports = router;

const express = require("express");

const { createDonation, findDonors, findSpecificDonors } = require("../Controller/DonationController");

const router = express.Router();

router.post("/donate", createDonation);

router.get("/list", findDonors);

router.get("/list/:blood", findSpecificDonors);


module.exports = router;