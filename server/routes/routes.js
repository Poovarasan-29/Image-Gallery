const express = require('express');
const { getHomePageDetails, getSearchedCategoryStaticDetails } = require('../controllers/homePageDetails');
const { uploadImages } = require('../controllers/uploadImages');
const router = express.Router();

router.route('/').get(getHomePageDetails);
router.route('/upload').post(uploadImages);
router.route('/get-details/:name').get(getSearchedCategoryStaticDetails);

module.exports = router;