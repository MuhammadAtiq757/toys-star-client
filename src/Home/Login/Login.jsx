

import img from '../../assets/images/login.jpg'
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const auth = getAuth(app)

const Login = () => {
    const {signIn} = useContext(AuthContext)

const googleProvider = new GoogleAuthProvider();

const handleGoogleSignIn =() =>{

    signInWithPopup(auth, googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })

    .catch(error =>{
        console.log('error', error.message);
    })
}


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>

                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='form-control mt-6'>

                                <input className=" btn   bg-blue-500" type="submit" value="Login" />
                            </div>
                            <div className='form-control mt-6'>
<button onClick={handleGoogleSignIn}>Login With Google</button>
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors ? <Link to='/signup' className='text-blue-500 font-bold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;