
import { useState } from "react";
import { Link } from "react-router-dom";



const ShowAllToy = ({ toys }) => {
    const { _id, name, price, quantity, category, photo, details } = toys

    const [searchText, setSearchText] = useState("");
    const [jobs, setJobs] = useState([]);

    const handleSearch = () => {
        fetch(`http://localhost:5000/getNameText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setJobs(data);
          });
      };


    return (

        <div>



        </div>

    );
};

export default ShowAllToy;