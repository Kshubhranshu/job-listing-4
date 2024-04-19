const Job = require("../models/job");

const createJobPost = async (req, res, next) => {
    try {
        const {
            companyName,
            logoUrl,
            title,
            description,
            salary,
            location,
            duration,
            locationType,
            skills,
            jobType,
            information,
        } = req.body;

        companyName();

        if (
            !companyName ||
            !logoUrl ||
            !title ||
            !description ||
            !salary ||
            !location ||
            !duration ||
            !locationType ||
            !skills ||
            !jobType ||
            !information
        ) {
            return res.status(400).json({
                errorMessage: "Bad request",
            });
        }

        const jobDetails = new Job({
            companyName,
            logoUrl,
            title,
            description,
            salary,
            location,
            duration,
            locationType,
            skills,
            jobType,
            information,
        });

        await jobDetails.save();
        res.json({ message: "Job created successfully" });
    } catch (error) {
        next(error);
    }
};

const getJobDetailsById = async (req, res, next) => {
    try {
        const { jobId } = req.params;

        if (!jobId)
            return res.status(400).json({
                errorMessage: "Bad request",
            });

        const jobDetails = await Job.findById(jobId);

        if (!jobDetails) {
            return res.status(400).json({
                errorMessage: "Bad request",
            });
        }

        res.json({ jobDetails });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createJobPost,
    getJobDetailsById,
};
