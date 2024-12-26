import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUploadSaved } from "../slice/uploadSavedSlice";

export default function SavedUploaded() {
    const [imageBlob, setImageBlob] = useState([]);
    const savedUpload = useSelector(state => state.uploadSavedSlice);
    const dispatch = useDispatch();
    console.log(savedUpload);

    function handleRemoveBtn(e) {
        dispatch(setUploadSaved(savedUpload.filter((item, index) => index !== Number(e.target.value))));
    }
    useEffect(() => {

        if (savedUpload.length !== 0) {
            setImageBlob(savedUpload.map((item) => item.images.map(img => URL.createObjectURL(img))));
        }
    }, [savedUpload]);

    console.log(imageBlob);
    return <>
        <aside className="p-4 px-4 saved-items">
            <h3>Saved</h3>

            {
                imageBlob.length === savedUpload.length && savedUpload.map((item, index) => <div className="border p-2 mt-1">

                    <div className="row row-cols-2 row-cols-sm-4 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" key={index}>
                        {
                            imageBlob[index].map((img, index) => <div className="col my-2 img-container" key={index} style={{ height: '70px' }}>
                                <img src={img} alt={item.name} title={img} style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                            </div>
                            )
                        }
                    </div>
                    <p className="m-0">{item.name}</p>
                    <p className="my-1" style={{ fontSize: '14px' }}>Category : {item.category[0].value}</p>
                    <div className="d-flex">
                        <span className="me-1" style={{ fontSize: '14px' }}>Tags: </span>
                        <ul className="list-unstyled d-flex flex-wrap gap-2 mt-1" style={{ fontSize: '10px' }}>
                            {
                                item.tags.map((tag, index) => <li className="border px-1" key={index}>{tag.value}</li>)
                            }
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end gap-1">
                        <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-warning" value={index}>Edit</button>
                        <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-danger" value={index} onClick={handleRemoveBtn}>Remove</button>
                    </div>
                </div>


                )}
            {/* <div className="border p-2 mt-1">
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                </div>
                <p className="m-0">Spide HD wallpaper 4k Laptop Desktop Ultra HD</p>
                <p className="my-1" style={{ fontSize: '14px' }}>Category : Spider man</p>
                <div className="d-flex">
                    <span className="me-1" style={{ fontSize: '14px' }}>Tags: </span>
                    <ul className="list-unstyled d-flex flex-wrap gap-2 mt-1" style={{ fontSize: '10px' }}>
                        <li className="border px-1">Red Spidey</li>
                        <li className="border px-1">Spidey</li>
                        <li className="border px-1">Spider Black</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end gap-1">
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-warning" value={'Edit'}>Edit</button>
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-danger" value={'Remove'} onClick={handleRemoveBtn}>Remove</button>
                </div>
            </div>
            <div className="border p-2 mt-1">
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                </div>
                <p className="m-0">Spide HD wallpaper Laptop Desktop FHD</p>
                <p className="my-1" style={{ fontSize: '14px' }}>Category : Spider Women</p>
                <div className="d-flex">
                    <span className="me-1" style={{ fontSize: '14px' }}>Tags: </span>
                    <ul className="list-unstyled d-flex flex-wrap gap-2 mt-1" style={{ fontSize: '10px' }}>
                        <li className="border px-1">Spider Black</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end gap-1">
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-warning" value={'Edit'}>Edit</button>
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-danger" value={'Remove'} onClick={handleRemoveBtn}>Remove</button>
                </div>
            </div>
            <div className="border p-2 mt-1">
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                </div>
                <p className="m-0">Spide HD wallpaper 4k Laptop Desktop Ultra HD</p>
                <p className="my-1" style={{ fontSize: '14px' }}>Category : Spider man</p>
                <div className="d-flex">
                    <span className="me-1" style={{ fontSize: '14px' }}>Tags: </span>
                    <ul className="list-unstyled d-flex flex-wrap gap-2 mt-1" style={{ fontSize: '10px' }}>
                        <li className="border px-1">Red Spidey</li>
                        <li className="border px-1">Spidey</li>
                        <li className="border px-1">Spider Black</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end gap-1">
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-warning" value={'Edit'}>Edit</button>
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-danger" value={'Remove'} onClick={handleRemoveBtn}>Remove</button>
                </div>
            </div>
            <div className="border p-2 mt-1">
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                </div>
                <p className="m-0">Spide HD wallpaper 4k Laptop Desktop Ultra HD</p>
                <p className="my-1" style={{ fontSize: '14px' }}>Category : Spider man</p>
                <div className="d-flex">
                    <span className="me-1" style={{ fontSize: '14px' }}>Tags: </span>
                    <ul className="list-unstyled d-flex flex-wrap gap-2 mt-1" style={{ fontSize: '10px' }}>
                        <li className="border px-1">Red Spidey</li>
                        <li className="border px-1">Spidey</li>
                        <li className="border px-1">Spider Black</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end gap-1">
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-warning" value={'Edit'}>Edit</button>
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-danger" value={'Remove'} onClick={handleRemoveBtn}>Remove</button>
                </div>
            </div>
            <div className="border p-2 mt-1">
                <div className="row row-cols-2 row-cols-sm-4 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                    <div className="col my-2 img-container" style={{ height: '70px' }}>
                        <img src="./Images/spidermen/spider-about.jpg" alt="" title="" style={{ objectFit: 'cover' }} className="border rounded selected-image" />
                    </div>
                </div>
                <p className="m-0">Spide HD wallpaper 4k Laptop Desktop Ultra HD</p>
                <p className="my-1" style={{ fontSize: '14px' }}>Category : Spider man</p>
                <div className="d-flex">
                    <span className="me-1" style={{ fontSize: '14px' }}>Tags: </span>
                    <ul className="list-unstyled d-flex flex-wrap gap-2 mt-1" style={{ fontSize: '10px' }}>
                        <li className="border px-1">Red Spidey</li>
                        <li className="border px-1">Spidey</li>
                        <li className="border px-1">Spider Black</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                        <li className="border px-1">Human Spider</li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end gap-1">
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-warning" value={'Edit'}>Edit</button>
                    <button style={{ fontSize: '12px' }} className="p-1 px-2 btn btn-danger" value={'Remove'} onClick={handleRemoveBtn}>Remove</button>
                </div>
            </div> */}
        </aside>
    </>
}