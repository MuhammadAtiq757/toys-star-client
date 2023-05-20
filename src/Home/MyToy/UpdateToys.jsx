import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {

   const toy = useLoaderData();
   const {price, _id} = toy

  console.log(toy._id);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
         
       const updating ={
        price,
        quantity,
        detail
       }
console.log(updating);

fetch(`http://localhost:5000/updateToy/${_id}`,{
    method: "PUT",
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(updating)
})

.then(res => res.json())
.then (data =>{
    console.log(data);
})

    }


    
    return (
        <div className="card-body">


        <form onSubmit={handleBookService}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-2/3 mx-auto mt-6">
        
            
            
          
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number"  name="price" className="input input-bordered" />
            </div>
           
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input type="number" name="quantity" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail description</span>
                </label>
                <input type="text" name="detail" className="input input-bordered" />
            </div>
        
        </div>
        
        <div className="form-control mt-6 w-2/3 mx-auto">
        
            <input type="submit" value="Confirm Update" className="btn btn-block" />
        </div>
        </form>  
        </div>
    );
};

export default UpdateToys;