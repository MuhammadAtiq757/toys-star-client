import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
const details = useLoaderData();

const {name,price, detail, ratings, photo, quantity, category} = details

    return (
        <div>

<div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            
            <div className="mx-auto m-10 card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name: {name}</h2>
    <p>Description: {detail}</p>
    
<div className="flex gap-10">
<p>Price: ${price}</p>
    <p>Ratings: {ratings}</p>
</div>

    <p>Available: {quantity}</p>
    <p>Category: {category}</p>
  </div>
</div>

        </div>
    );
};

export default ToysDetails;