const express = require("express");
const router = express.Router();
const jobController = require("../controller/job");
const verifyToken = require("../middlewares/verifyAuth");

router.post("/create", verifyToken, jobController.createJobPost);
router.get("/job-details/:jobId/:userId", jobController.getJobDetailsById);
router.put("/update/:jobId", verifyToken, jobController.updateJobDetailsById);
router.get("/all", jobController.getAllJobs);

module.exports = router;
