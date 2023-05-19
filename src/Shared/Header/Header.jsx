import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Header = () => {

  const { user, logOut } = useContext(AuthContext)
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(result => { })
      .catch(error => console.log(error))
  }


  return (
    <div className="navbar bg-slate-100">
      <div className="navbar-start">


        <img className="w-28 h-24" src="https://i.ibb.co/QkG2t7r/attachment-62129397-removebg-preview-removebg-preview.png" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li> <Link to="/">Home</Link> </li>
          <li><Link to='/alltoy'>All Toys</Link></li>


          <div className="flex gap-3 items-center">
            {
              user?.email ? <>
                <li>  <Link to='/myToy'>  My toy </Link> </li>
                <li> <Link to='/addToy'> Add toy  </Link> </li>
              </> :
                <li><Link to='/login'>Login</Link> </li>
            }

          </div>

          <li><Link to ='/blog'>Blogs</Link></li>

          <div className="flex items-center gap-4">



            {
              user && <label className="avatar tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>

                <div className="w-10 h-10 rounded-full">
                  <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
                </div>
              </label>
            }



            <div>
              {user && <span> <button onClick={handleLogOut}>Sign Out</button> </span>}
            </div>





          </div>

        </ul>
      </div>

    </div>
  );
};

export default Header;