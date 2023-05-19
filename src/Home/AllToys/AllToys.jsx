import { useLoaderData } from "react-router-dom";
import ShowAllToy from "../ShowAllToy/ShowAllToy";

const AllToys = () => {
    const alltoy = useLoaderData()
    console.log(alltoy);
    return (
        <>
            <div className="overflow-x-auto w-full">


               
                  

                        {
                            alltoy.map(toys => <ShowAllToy
                                key={toys._id}
                                toys={toys}
                            >
                            </ShowAllToy>)
                        }

               
            </div>



        </>


    );
};

export default AllToys;