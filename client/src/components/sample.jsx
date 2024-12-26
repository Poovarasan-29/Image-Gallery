import React, { useEffect, useState } from "react";


export default function Sample() {
    const [values, setvalues] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch('http://localhost:8080/get');
    //         const data = await res.json();
    //         console.log(data);
    //         setvalues(data);
    //     }
    //     fetchData();
    // }, []);
    return (
        <section className="container">
            <h1 className="text-center">Sample</h1>
            <table className="table text-center border table-bordered">
                <tr>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Src</th>
                    <th>alt</th>
                </tr>
                {
                    values.map((val, index) => {
                        return <tr key={index}>
                            <td>{val.title}</td>
                            <td>{val.name}</td>
                            <td>{val.src}</td>
                            <td>{val.alt}</td>
                        </tr>

                    })
                }
            </table>

            <div className="row">
                {
                    values.map((val, index) => {
                        return <div className="col-3"><img src={require(`../images/spider-man/${val.src}`)} className="img-fluid" alt={val.alt} title={val.title} /></div>
                    })
                }
            </div>
        </section>
    );
}