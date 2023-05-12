import {useState, useEffect} from "react";
import DATA from "./hocsinh";
function Bai3() {
    const [data, setData] = useState([])
    const fetchUserData = () => {
        fetch("https://645dfb538d08100293f3b843.mockapi.io/home")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    return(
        <>
            <table style={{margin:'0 auto', width:"80%"}} className="table table-dark table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">Gen</th>
                    <th scope="col">Home Town</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">avatar</th>
                </tr>
                </thead>
                <tbody>

                {data.map((hosinh,index) =>(
                    <tr key={index}>
                        <th scope="row">{hosinh.name}</th>
                        <td>{hosinh.class}</td>
                        <td>{hosinh.gen}</td>
                        <td>{hosinh.home_town}</td>
                        <td>{hosinh.phone_number}</td>
                        <td><img   src={hosinh.avatar} alt=""/></td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}

export default Bai3;