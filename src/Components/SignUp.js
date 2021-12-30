import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    console.log("FORMDATA----\n", formdata);

    await axios({
      method: "POST",
      data: formdata,
      url: "http://localhost:3001/user/signup",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    })
      .then((res) => {
        console.log("Sign Up data is send from frontend");
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Sign Up data is not send from frontend");
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
            />
          </li>
          <li>
            <span>Password</span>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
            />
          </li>
          <li>
            <span>Email</span>
            <input type="text" name="email" placeholder="Enter your email" />
          </li>
          <li>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            />
          </li>
          <li>
            <span>Last Name</span>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
          </li>
          <li>
            <input type="checkbox" />I agree to Term &amp; Conditions
          </li>
          <li>
            <input type="submit" Value="Register" />
          </li>
        </ul>
      </form>
      <div className="addtnal_acnt">
        I already have an account.
        <Link to="/">
          <a href>Login My Account !</a>
        </Link>
      </div>
    </div>
  );
}
