import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {IP} from "../config";

const Reset = () => {
  //const { token } = useParams();

  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (e.target.newPassword.value === e.target.conPassword.value) {
      let formdata = new FormData(e.target);

      await axios({
        method: "POST",
        data: formdata,
        url: IP+"/user/reset/",
        config: {
          headers: {
            "content-type": "multipart/form-data",
          },
        },
      })
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((err) => {
          console.log("Reset details is not send successfully from frontend>>>", err);
        });
    } else {
      alert("New Password and Confirm Password is not matching");
    }
  };
  return (
    <div className="register_sec">
      <h1>Reset Password</h1>
      <form onSubmit={submit}>
        <ul>
          <li>
            <span>Enter New Password</span>
            <input
              type="text"
              name="newPassword"
              placeholder="Enter your new password"
              required
            />
          </li>
          <li>
            <span>Confirm Password</span>
            <input
              type="text"
              name="conPassword"
              placeholder="Enter your password again"
              required
            />
          </li>
          <li>
            <input type="submit" defaultValue="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Reset;