import { useState }  from "react";
import logo from "./assets/logosmol.svg";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // run login API
  alert(email + password);
  };
  const handleNabigationToPage = () => {
    navigate("/main")
}
  const handleNabigationToPage2 = () => {
    navigate("/register")
}
  return (
     <>
      <div className="container width-box">
        <img src={logo} alt="WWSCouts Logo" />
        <h2>Manage Your Account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="imputcontainer">
          <p>Email</p>
          <input value={email} onChange={e=>setEmail(e.target.value)}
           type="text" />
          </div>
          <div className="inputcontainer">
            <p>Password</p>
            <input value={password} onChange={e=>setPassword(e.target.value)}
            type="password" />
          </div>
          <div className="bottomFrom">
            <button onClick={handleNabigationToPage}>LogIn</button>
            <div className="links">
            <button onClick={handleNabigationToPage2}>New User?</button>
              <p>Forgot Password?</p>
            </div>
          </div>
        </form>
    </div>
  </>
  );
}