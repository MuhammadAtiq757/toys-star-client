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
    
    <p className="btn btn-ghost normal-case text-xl">Sports <span className="text-purple-800 ml-1"> Zone </span> </p>
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