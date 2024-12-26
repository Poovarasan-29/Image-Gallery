import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function Gallery() {

    const [imgList, setImgList] = useState([]);
    const [counter, setCounter] = useState(0);
    const galleryImages = useSelector(state => state.galleryImages);
    const [getAllImages, setGetAllImages] = useState([]);
    const [displayImages, setDisplayImages] = useState([]);
    console.log(galleryImages);

    useState(() => {
        const allImages = []
        const images = galleryImages.map(item => item.images);
        for (let i = 0; i < images.length; i++) {
            allImages.push(...images[i])
        }
        setGetAllImages(allImages);

        const temp = [];
        for (let i = 0; i < (allImages.length > 10 ? 10 : allImages.length); i++) {
            temp.push(allImages[i]);
        }
        setDisplayImages(temp);
        setCounter(temp.length);
    })
    // const length = 2 - 10 > 10 ? (2 - 10) / 10 > 0.9 ? 10 : (2 - 10) : 2;
    // console.log(length);

    console.log(displayImages);


    function displayMoreImages() {
        const temp = []; // 22 > 10?
        const length = getAllImages.length - counter > 10 ? (getAllImages.length - counter) / 10 > 0.9 ? 10 : (getAllImages.length - counter) : getAllImages.length - counter;
        console.log(length);

        for (let i = counter; i < counter + length; i++) {
            temp.push(getAllImages[i])
        }
        setDisplayImages(previous => [...previous, ...temp]);
        setCounter(previos => previos + length);

    }

    return (

        <>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 p-3 g-3 my-3" id="gallery">
                {
                    displayImages.map((img, index) => <div className="col gallery" key={index}>
                        <div style={{ overflow: 'hidden' }}>
                            <img src={img} alt={img} title={img} className="img-fluid" />
                        </div>
                    </div>)
                }
            </div>
            <div className="text-center">
                {
                    (getAllImages.length !== counter) && <span className="text-decoration-none fs-4 px-3 btn btn-primary" id="gallerMore" onClick={displayMoreImages} >More</span>
                }
            </div>
        </>
    );
}


export default Gallery;