import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../style/main.css'

const Main = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className="container">
                {
                users.map(elem => (
                    <div className="secondContainer" key={elem.id}>
                        <div className='userBlock'>
                            <h3>{elem.name}</h3>
                            <div className='linkBlock'>
                                <a href='.' alt='#'>{elem.email}</a>
                                <a href='.' alt='#'>{elem.phone}</a>
                            </div>
                            <div className='companyBlock'>
                                <p>{elem.company.name}</p>
                                <p>{elem.company.catchPhrase}</p>
                                <p>{elem.company.bs}</p>
                            </div>
                            <Link to={`/posts/${elem.id}`}>
                            <button>Details</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Main;