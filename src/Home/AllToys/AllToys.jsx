import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllToys = () => {
    // const alltoy = useLoaderData()
    const [find, setFind] = useState('')
 const [alltoy, setAlltoy ] = useState([])
    useEffect(() => {
  fetch(`https://toys-market-server-muhammadatiq757.vercel.app/alltoy`)
  .then(res => res.json())
  .then(data => setAlltoy(data))

    }, [])

    // console.log(alltoy);


    const handleFind = ()=>{
      fetch(`http://localhost:5000/findName/${find}`)
      .then(res => res.json())
      .then (data => setAlltoy(data))

    }
    return (
        <>
            <div className="overflow-x-auto w-full">   

            <div className="form-control">
  <div className="input-group">
    <input onChange={e => setFind(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={handleFind} className="btn btn-active">Button</button>
  </div>
</div>             
                            
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
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {

alltoy.map(toys => <>
          <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toys.photo} />
              </div>
            </div>
          
          </div>
        </td>
        <td>
        {toys.name}
          <br/>
          
        </td>
        <td>{toys.category}</td>
        <th>
        <Link to={`/toyDetails/${toys._id}`}>
                                <button className="btn">detail</button>
                            </Link>
        </th>
      </tr>
        </>)
     }
    
   
    </tbody>
  
    
  </table>
</div>
                           

               
            </div>



        </>


    );
};

export default AllToys;