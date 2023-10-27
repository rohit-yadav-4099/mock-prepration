import react, { useEffect, useState } from "react";
import axios from 'axios'

function APIData() {
    const [user, setuser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setuser(response.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <h1>API DATA</h1>
            {user.map((item, index) => {
                return (
                    <>
                        <h3>NAme:{item.name}</h3>
                        <h3>Username:{item.username}</h3>
                    </>
                )
            })}
        </>
    )
}
export default APIData