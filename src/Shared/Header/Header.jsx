import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Header = () => {

const {user, logOut} = useContext(AuthContext)
console.log(user);
const handleLogOut= () =>{
  logOut()
  .then(result => {})
  .catch(error => console.log(error))
}


    return (
        <div className="navbar bg-base-200">
  <div className="navbar-start">
    
   
    <img className="w-28 h-24" src="https://i.ibb.co/QkG2t7r/attachment-62129397-removebg-preview-removebg-preview.png"  />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <Link to="/">Home</Link> </li>
      <li><a>All Toys</a></li>
      <li><a>Blogs</a></li>
      {/* {
        user && <span>Welcome {user.email} <button onClick={handleLogOut}>Sign Out</button></span>
      } */}
      <div className="w-10 rounded">  
        <img src={user?.photoURL} /> 
      </div>
      {user && <span> <button onClick={handleLogOut}>Sign Out</button> </span>}
    </ul>
  </div>
 
</div>
    );
};

export default Header;