import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
  const details = useLoaderData();

  const { name, price, detail, ratings, photo, quantity, category } = details

  return (
    <div>


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