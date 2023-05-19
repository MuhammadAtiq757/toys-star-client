import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [mytoy, setMytoy] = useState([])

   const url =`https://toys-market-server-muhammadatiq757.vercel.app/myToy?email=${user?.email}`;
    
 useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setMytoy(data))
 }, [])

 const handleDelete = id =>{
    const proceed = confirm('Are you sure want to delete?')
    if(proceed){
    fetch(`https://toys-market-server-muhammadatiq757.vercel.app/addToy/${id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
            alert('Deleted Successful');
            const remaining = mytoy.filter(toy => toy._id !==id);
            setMytoy(remaining)
        }
    })



    }
}


    return (
        <div>
            

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
        <th>Photo</th>
        <th>Name</th>
        <th>Price</th>
        <th>Ratings</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
    {
        mytoy.map(toy => <MyToysRow
        key={toy._id}
        toy ={toy}
        handleDelete={handleDelete}
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