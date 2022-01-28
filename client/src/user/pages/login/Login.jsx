import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  

  const [design1, setDesign1] = useState("userLogin");
  const [design2, setDesign2] = useState("adminLogin");
  const [text, setText] = useState("User Login");
  const [bgColor ,setBgColor] = useState("#0b0b0b");
  const [buttonColor ,setButtonColor] = useState("red");
  const [buttonText ,setButtonText] = useState("Sign In");
  const [isAdmin , setIsAdmin] = useState(false)
  
  const adminLogin =(e) => {
     e.preventDefault();
     setDesign1("adminLogin")
     setDesign2("userLogin")
     setText("Admin Login")
     setBgColor("red");
     setButtonColor("#0b0b0b");
     setButtonText("Admin Sign In")
     setIsAdmin(true)
  }
  const userLogin =(e) => {
    e.preventDefault();
    setDesign1("userLogin")
    setDesign2("adminLogin")
    setText("User Login")
    setBgColor("#0b0b0b");
    setButtonColor("red");
    setButtonText("Sign In")
    setIsAdmin(false)
  }

  console.log(design1,design2,text)

  const handleLogin = (e) => {
    e.preventDefault();
    login(isAdmin,{ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
          
        <form style={{backgroundColor:bgColor}}>
        <div>
          <button  className={design2} onClick={adminLogin}>Admin</button>
          <button  className={design1} onClick={userLogin}>User</button>
          </div>
          <h1>{text}</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={{backgroundColor:buttonColor}} type="submit" className="loginButton" onClick={handleLogin}>
           {buttonText}
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
