import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    console.log("FORMDATA----\n", formdata);
    await axios({
      method: "POST",
      data: formdata,
      url: "http://localhost:3001/user/login",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    })
      .then((res) => {
        console.log("log In details is send successfully from frontend");
        if (res.success === false) {
          console.log(res.success);
          alert("Wrong details entered");
          document.getElementById("login_form").reset();
        } else {
          console.log(res.data.success, res.data.data[0]);
          localStorage.setItem("userId", res.data.data[0]._id);
          navigate("/feed");
        }
      })
      .catch((err) => {
        console.log("Log In details is not send successfully from frontend");
      });
  };
  return (
    <div className="login_sec">
      <h1>Log In</h1>
      <form id="login_form" onSubmit={submit}>
        <ul>
          <li>
            <span>Email-ID</span>
            <input type="text" name="email" placeholder="Enter your email" />
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
}
