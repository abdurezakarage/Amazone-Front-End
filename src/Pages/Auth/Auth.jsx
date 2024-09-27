import React, { useState, useContext } from "react";
import "./Signup.css";
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { Link ,useNavigate, useLocation} from "react-router-dom";
import { DataContext} from "../../Component/Dataprovider/Dataprovider"
import { Type } from "../../Utility/action.Type";
import { ClipLoader,CircleLoader } from "react-spinners";

function Signup() {
  const[email,setEmail] = useState("");
  const[password,SetPassword]= useState("");
  const[error,setError]= useState('')
  const[loading,setLoading]=useState({signIn: false,
    signuP:false})
const [{user},dispach]=useContext(DataContext);
const navigate = useNavigate();
const navStatedata= useLocation()
console.log(navStatedata);
  const authhandler = (e)=>{
    e.preventDefault()
    // console.log(e.target.name);
    if(e.target.name == "signin"){
//firebase auth
setLoading({...loading,signIn:true})
signInWithEmailAndPassword(auth,email,password).then((userinfo)=>{
  // console.log(userinfo);
  dispach({
    type:Type.SET_USER,
    user:userinfo.user
  }
  )
  setLoading({...loading,signIn:false})
  navigate(navStatedata?.state?.redirect || "/");
}).catch((err)=>{
  console.log(err.messeage);
  setError(err.messeage);
  setLoading({ ...loading, signIn: false });
})
    }else{
      setLoading({ ...loading, signuP: true });
createUserWithEmailAndPassword(auth,email,password).then((userinfo)=>{
  console.log(userinfo);
   dispach({
     type: Type.SET_USER,
     user: userinfo.user,
   });
   setLoading({...loading, signuP:false})
    navigate(navStatedata?.state?.redirect || "/");
}).catch((err)=>{
  console.log(err);
  setError(err.messeage);
  setLoading({ ...loading, signuP: false });
})
    }
    
  }
  return (
    <section className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG1.png"
          alt="Amazon sign in logo"
        />
      </Link>
      <div className="login_contmainer">
        <h1> Sign-in </h1>
        {navStatedata?.state?.msg && (<small style={
          {padding: "5px",
            textAlign:"center",
            color: "red",
            fontWeight:"bold",
          }
        }>{navStatedata.state.msg}</small>)

        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            className="login_signinbutton"
            type="submit"
            name="signin"
            onClick={authhandler}
          >
            {loading.signIn ? <ClipLoader color="black"  size={16}></ClipLoader> : "Sign in"}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. please see our privacey policy Notice, our cookies Notice and
          our Interest-based Ads Notice.
        </p>
        <button
          className="login_registerbutton"
          type="submit"
          name="signup"
          onClick={authhandler}
        >
          {loading.signuP ? (
            <CircleLoader color="#000" size={15}></CircleLoader>
          ) : (
            " Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Signup;
