import React, { useCallback, useState } from "react";
import '../css/uploadimages.css';
import { Link } from "react-router-dom";
import Select from 'react-dropdown-select';
import { useDropzone } from 'react-dropzone';
import selectOptionsData from '../data/selectOptions.json';
// import SavedUploaded from "../components/SavedUploaded";
// import { setUploadSaved } from "../slice/uploadSavedSlice";
// import { useDispatch } from "react-redux";
import axios from 'axios';
import { toast } from "react-toastify";



export default function UploadImages() {

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [recomendedTags, setRecomendedTags] = useState(null);
    const [dropedImages, setDropedImages] = useState([]);
    const [imgClicked, setImgClicked] = useState(null);
    const [duplicateImageUploaded, setDuplicateImageUploaded] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [options, setOptions] = useState([]);
    // const savedUpload = useSelector(state => state.uploadSavedSlice);
    // const dispatch = useDispatch();
    useState(() => {
        setOptions(selectOptionsData.options);
    }, []);

    function handleCategorySearch(val) {

        if (val.length !== 0) {
            setSelectedCategory(val);
            // setRecomendedTags(tags[val[0].value].map(item => { return { label: item, value: item } }));
            setRecomendedTags(val[0].tags.map(value => { return { tag: value } }));
        } else {
            setSelectedCategory([]);
        }
        setSelectedTags([]);
    }

    const onDrop = useCallback((acceptedFiles) => {
        setDuplicateImageUploaded(false);
        setDropedImages((previosValues) => [
            ...previosValues,
            ...acceptedFiles.map(file => {
                let alreadySelected;
                for (let i = 0; i < previosValues.length; i++) {
                    const dropFile = previosValues[i];
                    if (dropFile.lastModified === file.lastModified && dropFile.size === file.size && dropFile.type === file.type) {
                        alreadySelected = file;
                        break;
                    }
                }
                if (alreadySelected) {
                    setDuplicateImageUploaded(true);
                    return false;
                }
                else
                    return Object.assign(file, { preview: URL.createObjectURL(file) })
            }).filter(val => val !== false)
        ])
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    function handleImageClick(e) {
        if (imgClicked !== e.target.src) {
            setImgClicked(e.target.src);
        } else {
            setImgClicked(null)
        }
    }

    function handleTags(val) {
        if (val.length !== 0 && val[val.length - 1].tag.includes(',')) {
            const removedComa = val[val.length - 1].tag.split(',')[0];
            val[val.length - 1].tag = removedComa;
        }
        setSelectedTags(val);
    }

    function removeClickedImage(e) {
        const index = e.target.getAttribute('index');
        const removabled = dropedImages.filter((img, i) => i !== Number(index));
        setDropedImages(removabled);
    }


    // function handleSubmitWhenUseSave(e) {
    //     e.preventDefault();
    //     dispatch(setUploadSaved([{ name: nameValue, category: selectedCategory, tags: selectedTags, images: dropedImages }]));
    //     console.log({ name: nameValue, category: selectedCategory, tags: selectedTags, images: dropedImages });

    //     setNameValue('');
    //     setSelectedCategory([]);
    //     setSelectedTags([]);
    //     setDropedImages([]);
    // }

    async function handleSubmit(e) {
        // e.preventDefault();
        try {
            const tags = selectedTags.map(value => value.tag);
            const formData = new FormData();
            formData.append('name', nameValue);
            formData.append('category', selectedCategory[0].name);
            formData.append('tags', tags);

            for (let i = 0; i < dropedImages.length; i++) {
                formData.append('images', dropedImages[i]);
            }
            const res = await axios.post(process.env.REACT_APP_API_URI + 'upload', formData, { headers: { "Content-Type": "multipart/form-data" } });
            if (res.data.message) {
                toast.success("Successfully Uploaded", { autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false, position: 'top-center' })
            }

        } catch (error) {
            toast.error("Something went Wrong", { autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false, position: 'top-center' })
        }



        // setNameValue('');
        // setSelectedCategory([]);
        // setSelectedTags([]);
        // setDropedImages([]);
    }

    return <div className="upload-images" style={{ overflowX: 'hidden' }}>
        <header style={{ width: '100%', height: '70px' }} className="shadow px-4 d-flex justify-content-between align-items-center">
            <Link to={'/'} className="d-flex align-items-center text-decoration-none">
                <i className="bi bi-arrow-left-circle fs-1"></i><span className="ms-2">Home</span>
            </Link>
        </header>
        <main className="container-xl py-3 d-flex flex-column flex-md-row">
            <form className="p-2 px-4 mx-auto save-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row d-flex flex-column gap-4">
                    <div className="col">
                        <label htmlFor="name" className="mb-1">Name</label>
                        <input type="text" name="name" id="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required placeholder="Black Spidy HD-Laptop wallpaper" className="form-control" />
                    </div>
                    <div className="col">
                        <label htmlFor="category" className="mb-1">Category</label>
                        <Select options={options} labelField="name" valueField="name" id="category" name="category" dropdownHeight="145px" values={selectedCategory} clearable closeOnClickInput separator backspaceDelete required placeholder={"Select Category"} onChange={handleCategorySearch} />
                    </div>
                    <div className="col">
                        <label htmlFor="tag" className="mb-1">Tags</label>
                        <Select options={recomendedTags} labelField="tag" dropdownHeight="145px" valueField="tag" id="tag" name="tag" values={selectedTags} disabled={selectedCategory.length !== 0 ? false : true} clearable create closeOnClickInput multi separator backspaceDelete required placeholder={"Select | Add Tags"} onChange={handleTags} />
                    </div>
                    <div className="col" {...getRootProps()}>
                        <label htmlFor="images" style={{ width: '100%', height: '200px' }} className="border p-3 text-center d-flex flex-column justify-content-evenly align-items-center">
                            {isDragActive ? <p className="m-0" style={{ fontSize: '22px' }}>Drop the files here</p> : <p className="m-0" style={{ fontSize: '22px' }}>Drag & drop some files here, or click to select files</p>}
                            <i className="bi bi-image fs-1"></i>
                        </label>
                        <input {...getInputProps()} style={{ display: 'none' }} />
                    </div>
                    <div className="col">
                        {dropedImages.length !== 0 && <div>
                            <p style={{ fontSize: '12px' }} className="m-0 mb-1">May be Images are didn't shows correctly *no problem</p>
                        </div>
                        }
                        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-4">
                            {
                                dropedImages.map((img, index) => <div className="col my-2 img-container" key={index} style={{ height: '150px' }}>
                                    <i className="bi bi-x-circle img-remove-btn" index={index} onClick={removeClickedImage}></i>
                                    <img src={img.preview} alt={img.preview} title={img.preview} style={{ objectFit: imgClicked === img.preview ? 'contain' : 'cover' }} className="border rounded selected-image" onClick={handleImageClick} />
                                </div>)
                            }
                        </div>
                        {duplicateImageUploaded && <p className="text-danger mt-2">You'r try to upload duplicate Images so removed duplicated images</p>}
                    </div>
                    {/* <button value={"Save"} className="btn btn-success w-25 me-auto ms-3 mt-2">Save</button> */}
                    {
                        dropedImages.length > 0 && <p>Selected Images : {dropedImages.length} </p>
                    }

                    <button value={"Save"} className="btn btn-success w-25 me-auto ms-3 mt-2">Upload</button>
                </div>
            </form>
            {/* <div className="border"></div>
            <SavedUploaded /> */}
        </main>
    </div>
}