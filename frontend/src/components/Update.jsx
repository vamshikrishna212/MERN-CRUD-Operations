import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const [error, setError] = useState("");



    const navigate = useNavigate();

    const { id } = useParams()

    const getSingleData = async () => {
        const response = await fetch(`http://localhost:5000/${id}`)

        const result = await response.json();
        if (response.ok) {
            setName(result.name)
            setAge(result.age)
            setEmail(result.email)
        }
        else {
            console.log(result.error);
            setError(result.error)
        }
    }

    useEffect(() => {
        getSingleData()
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();

        const newdata = { name, email, age };
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(newdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json()

        if (response.ok) {
            console.log(result)
            console.log(name, email, age)
            navigate('/disp')
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
            <h2>Enter new record</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    )
}

export default Update
