import { Link } from "react-router-dom";


const ShowAllToy = ({ toys }) => {
    const { _id, name, price, quantity, category, photo } = toys
    return (

        <div>

            {/* <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>

            </tr> */}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quan:</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{name}</th>
                            <td>{category}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <Link to={`/toyDetails/${_id}`}>
                            <button className="btn">detail</button>
                            </Link>
                   
                           
                        </tr>
                      
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default ShowAllToy;