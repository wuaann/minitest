import DATA from "./hocsinh";
import 'bootstrap/dist/css/bootstrap.css';
function Bai2() {
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
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                {DATA.map((data,index) =>(
                    <tr key={index}>
                        <th scope="row">{data.name}</th>
                        <td>{data.class}</td>
                        <td>{data.gen}</td>
                        <td>{data.home_town}</td>
                        <td>{data.phone_number}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}

export default Bai2;