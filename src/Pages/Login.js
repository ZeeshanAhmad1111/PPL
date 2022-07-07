import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IP } from "../Config/config";

const Login = () => {
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    await axios({
      method: "POST",
      data: formdata,
      url: IP + "/user/login",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    })
      .then((res) => {
        if (res.data.success === false) {
          alert(res.data.data);
          document.getElementById("login_form").reset();
        } else {
          alert(res.data.message);
          localStorage.setItem("token", res.data.data);
          navigate("/feed");
        }
      })
      .catch((err) => {
        console.log(
          "Log In details is not send successfully from frontend>>>",
          err
        );
      });
  };
  return (
    <div className="login_sec">
      <h1>Log In</h1>
      <form id="login_form" onSubmit={submit}>
        <ul>
          <li>
            <span>Email-ID</span>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
            />
          </li>
          <li>
            <span>Password</span>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              required
            />
          </li>
          <li>
            <input type="checkbox" />
            Remember Me
          </li>
          <li>
            <input type="submit" defaultValue="Log In" />
            <Link to="/forgot">
              <a href>Forgot Password</a>
            </Link>
          </li>
        </ul>
      </form>
      <div className="addtnal_acnt">
        I do not have any account yet.
        <Link to="/signup">
          <a href>Create My Account Now !</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
