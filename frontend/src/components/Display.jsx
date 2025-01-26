import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Display() {

    const [data, setData] = useState([]);
    const [error, setError] = useState("");


    async function getData() {
        const response = await fetch('http://localhost:5000')

        const result = await response.json();
        if (response.ok) {
            setData(result)

        }
        else {
            console.log(result.error);
            setError(result.error)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data);


    const handleDelete = async (id) => {
        console.log("id ", id)
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE'
        });

        const result = await response.json();
        if (response.ok) {
            setError("Deleted Successfully")

            setTimeout(() => {
                setError("");
                getData()
            }, 3000)
        }
        else {
            console.log(result.error);
            setError(result.error)
        }

    }






    return (
        <div className="container">
            {error && <div className="alert alert-danger" >
                {error}
            </div>}
            <h2 className="text-center">All data</h2>
            <div className="row">
                {data.map((d) => (
                    <div key={d._id} className="col-3 mb-2px">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{d.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{d.email}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{d.age}</h6>
                                <a href="#" className="card-link" onClick={() => handleDelete(d._id)}>delete</a>
                                <Link to={`/${d._id}`} className="card-link">edit</Link>


                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Display