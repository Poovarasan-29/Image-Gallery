const multer = require('multer');
const Images = require('../models/galleryModel');

let imgPaths = [];
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/Uploads');
    },
    filename: (req, file, cb) => {
        imgPaths.push('./Uploads/' + Date.now() + '_' + file.originalname)
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage });
const uploadHandler = upload.array('images');

exports.uploadImages = async (req, res) => {
    imgPaths = [];
    uploadHandler(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            console.log("Multer Error : ", err);
        } else if (err) {
            console.log("Error : ", err);
        } else {
            const values = req.body;
            values['images'] = imgPaths;
            values['tags'] = values.tags.split(',');

            const newImages = new Images(values);
            const savedImages = await newImages.save();
            res.status(200).json({ message: true });
        }
    })
}