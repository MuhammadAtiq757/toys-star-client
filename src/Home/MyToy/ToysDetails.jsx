import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
const details = useLoaderData();

const {name} = details

    return (
        <div>
            
<p>{name}</p>

        </div>
    );
};

export default ToysDetails;