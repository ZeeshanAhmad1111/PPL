import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();

    if (e.target.newPassword.value === e.target.conPassword.value) {
      let formdata = new FormData(e.target);
      formdata.append('email', localStorage.getItem("emailId"));
      console.log("FORMDATA----\n", formdata);

      await axios({
        method: "POST",
        data: formdata,
        url: "http://localhost:3001/user/reset",
        config: {
          headers: {
            "content-type": "multipart/form-data",
          },
        },
      })
        .then((res) => {
          console.log("Reset details is send successfully from frontend");
          console.log(res.data);
          navigate("/");
        })
        .catch((err) => {
          console.log("Reset details is not send successfully from frontend");
        });
    } else {
      alert("Password is not matching");
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