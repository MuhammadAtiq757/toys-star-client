

const MyToysRow = ({toy}) => {
    const {name, email, price, ratings, photo} = toy
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
        <div className="avatar">
              <div className="rounded w-24 h-24">
           {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
        </td>
        <td>
         
         {name}
        </td>
        
        <td>&{price}</td>
        <td>{ratings}</td>


        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default MyToysRow;