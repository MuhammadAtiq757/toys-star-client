
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabular = () => {

  const [products, setProducts] = useState([]);
  
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [setProducts]);

// console.log(products[0].sportsCar[0]);


    return (
        <div className='mt-6 mb-6'>
            <Tabs className="text-center">
    <TabList>
      <Tab>sports car</Tab>
      <Tab>truck</Tab>
      <Tab>mini police car</Tab>
    </TabList>

    <TabPanel>

    <div>
      {/* <p>{products.sportsCar.length}</p> */}
   {/* {
    products.sportsCar.map(spo => console.log(spo))

   } */}
    </div>

    </TabPanel>

    <TabPanel>
<h2>comment 2</h2>
    </TabPanel>

    <TabPanel>
  <h2>comment 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Tabular;