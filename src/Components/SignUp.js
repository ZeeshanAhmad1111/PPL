import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import validation from "../Utils/Validation";

const SignUp = () => {
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    //const [userName, email, passWord, firstName, lastName] = e.target.name.value; 
    // const errors = validation(e.target.userName.value);
    // console.log(e.target.name.value);
    // document.getElementById("err").innerHTML=errors;
    let formdata = new FormData(e.target);
    await axios({
      method: "POST",
      data: formdata,
      url: IP+"/user/signup",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    })
      .then((res) => {
        alert(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Sign Up data is not send from frontend>>>",err);
      });
  };

  return (
    <div className="register_sec">
      <h1>Create An Account</h1>
      <form onSubmit={submit}>
        <ul>
          <li>
            <span>Username</span>
            <input
              type="text"
              name="userName"
              placeholder="Enter your username"
              required
            />
          </li>
          <li>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </li>
          <li>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </li>
          <li>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
          </li>
          <li>
            <span>Last Name</span>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </li>
          <li>
            <input type="checkbox" required />I agree to Term &amp; Conditions
          </li>
          <li>
            <input type="submit" Value="Register" />
          </li>
        </ul>
      </form>
      <div id="err"></div>
      <div className="addtnal_acnt">
        I already have an account.
        <Link to="/">
          <a href>Login My Account !</a>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
