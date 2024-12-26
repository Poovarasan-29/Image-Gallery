import React, { useEffect, useState } from "react";
import axios from 'axios';
import selectOptionsData from '../data/selectOptions.json';
import { useParams } from "react-router-dom";


// In this search bar used only for Top serach It cann,t hanndle specific serach Still not finished
function SearchBar(props) {

    const { id } = props;
    const { name } = useParams();

    const [searchValue, setSearchValue] = useState(name ? name : "Spider Man");
    const [recomendedOptions, setRecomendedOptions] = useState([]);
    const [totalRecomendedOptions, setTotalRecomendedOptions] = useState([]);
    // const [urlName, setUrlName] = useState();

    useEffect(() => {
        setTotalRecomendedOptions(selectOptionsData.options.map(option => option.name));
    }, []);


    function handleSearchInput(e) {
        const val = e.target.value;
        setSearchValue(val);
        if (val.length !== 0) {
            const recomendation = totalRecomendedOptions.filter(value => value.toLowerCase().includes(val.toLowerCase()));
            setRecomendedOptions(recomendation);
        } else {
            setRecomendedOptions([]);
        }
    }

    function handleRecomendedOptionsClicking(e) {
        setSearchValue(e.target.innerText);
    }

    // function handleOnSubmit(e) {
        // totalRecomendedOptions.forEach(val => {
        //     if (val.option === searchValue) {
        //         setUrlName(val.collection)
        //     }
        // })
    // }

    return (
        <form className="d-flex justify-content-center" id='search-bar' style={{ width: '60%' }} action={'/' + searchValue}>
            <div className="w-75 bg-black me-2" style={{ position: 'relative' }}>
                <input className="form-control me-2 search-bar-input" type="search" value={searchValue} placeholder="Search" onChange={handleSearchInput} aria-label="Search" />
                <ul style={{ position: 'absolute', top: '44px' }} className="w-100 list-unstyled bg-light rounded py-1" id={id}>
                    {
                        recomendedOptions.map((val, index) => {
                            return <li className="py-2 px-3" key={index} onClick={handleRecomendedOptionsClicking}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg><span className="ps-2">{val}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}

export default SearchBar;