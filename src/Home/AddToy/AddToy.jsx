import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddToy = () => {
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const category = form.category.value;

        const adding ={

            photo,
            name,
            seller,
            email,
            price,
            ratings,
            quantity,
            detail,
            category

        }
        console.log(adding);
        
fetch('https://toys-market-server-muhammadatiq757.vercel.app/addToy',{
    method: 'POST',
    headers: {
        'content-type': 'application/json'

    },
    body: JSON.stringify(adding)
})
.then(res => res.json())
.then(data =>{
console.log(data);
        })
    }




    return (
        <div className="card-body">


<form onSubmit={handleBookService}>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-2/3 mx-auto mt-6">

    
    <div className="form-control">
        <label className="label">
            <span className="label-text">Picture URL</span>
        </label>
        <input type="text" name="photo" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" name="name"  className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Sub Category</span>
        </label>
        <input type="text" name="category"  className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">seller name</span>
        </label>
        <input type="text" defaultValue={user?.name} name="seller" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Seller Email</span>
        </label>
        <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Price</span>
        </label>
        <input type="number"  name="price" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Rating</span>
        </label>
        <input type="text" name="ratings" className="input input-bordered" />
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

    <input type="submit" value="Add new Toy" className="btn btn-block" />
</div>
</form>  
</div>
        
    );
};

export default AddToy;