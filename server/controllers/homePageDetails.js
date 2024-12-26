// const { SpidermanModel } = require("../models/galleryModel");

const Images = require("../models/galleryModel");
const StaticDetails = require('../models/staticDetailsModel');


exports.getHomePageDetails = async (req, res) => {
    try {
        const getAllImages = await Images.find({});
        res.status(200).json({
            message: "Success"
        })
    } catch (error) {
        res.status(404).json({
            message: "Cann't get | Failed"
        })
    }
}

exports.getSearchedCategoryStaticDetails = async (req, res) => {
    try {
        const { name } = req.params;
        const staticDetails = await StaticDetails.find({ name });
        const galleryImages = await Images.find({ category: name });
        console.log(galleryImages);

        res.status(200).json({ staticDetails, galleryImages });

    } catch (error) {
        console.log(error);

    }
}