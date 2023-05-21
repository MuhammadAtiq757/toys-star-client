
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabular = () => {


 
    const [toys, setToys] = useState([]);
    const [active, setActive] = useState('car');

    useEffect(() => {
      fetch(`https://toys-market-server-muhammadatiq757.vercel.app/toyCategory/${active}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data)
          console.log(data);
        })

    }, [active])


    const handleChange = (index) => {

      if (index === 0) {
        setActive("car")
      }

      else if (index == 1) {
        setActive("truck")
      }
      else{
        setActive("miniPolice")
      }
    }



    return (
      <div className='mt-6 mb-6'>
        <Tabs className="text-center" defaultIndex={1} onSelect={(index) => handleChange(index)}>
          <TabList>
            <Tab>sports car</Tab>
            <Tab>truck</Tab>
            <Tab>mini police car</Tab>
          </TabList>

          <TabPanel>

          <div className='ml-12 mt-4 grid grid-cols-1 mx-auto md:grid-cols-2 '>
   {
    toys.slice(0, 2).map(cate =>
     <div key={cate._id}>
      <div className="mr-0 card w-96 bg-base-100 shadow-xl">
  <figure><img src={cate.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {cate.name}</h2>
    <div className='flex m-6'>
    <p>$Price{cate.price}</p>
    <p>Ratings: {cate.ratings}</p>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/toyDetails/${cate._id}`}>
                                <button className="btn btn-outline">detail</button>
                            </Link>

    </div>
  </div>
</div>
    </div> )
   }
   </div>

          </TabPanel>

          

          <TabPanel>
          <div className='ml-12 mt-4 grid grid-cols-1 mx-auto md:grid-cols-2'>
   {
    toys.slice(0, 2).map(cate =>
     <div key={cate._id}>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure><img className='h-64' src={cate.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {cate.name}</h2>
    <div className='flex m-6'>
    <p>$Price{cate.price}</p>
    <p>Ratings: {cate.ratings}</p>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/toyDetails/${cate._id}`}>
                                <button className="btn btn-outline">detail</button>
                            </Link>
    </div>
  </div>
</div>
    </div> )
   }
   </div>
          </TabPanel>

          <TabPanel>
          <div className='ml-12 mt-4 grid grid-cols-1 mx-auto md:grid-cols-2'>
   {
    toys.slice(0, 2).map(cate =>
     <div key={cate._id}>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64' src={cate.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {cate.name}</h2>
    <div className='flex m-6'>
    <p>$Price{cate.price}</p>
    <p>Ratings: {cate.ratings}</p>
    </div>
                          <Link to={`/toyDetails/${cate._id}`}>
                                <button className="btn btn-outline">detail</button>
                            </Link>
  </div>
</div>
    </div> )
   }
   </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  };

export default Tabular;