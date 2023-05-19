import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [mytoy, setMytoy] = useState([])

   const url =`http://localhost:5000/myToy?email=${user?.email}`;
    
 useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setMytoy(data))
 }, [])


    return (
        <div>
            
  <h2 className="text-center text-5xl"> {mytoy.length}</h2>

  <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
    {
        mytoy.map(toy => <MyToysRow
        key={toy._id}
        toy ={toy}
        >


        </MyToysRow>)
    }
    
   
   
    </tbody>
    
    
  </table>
</div>

        </div>
    );
};

export default MyToy;