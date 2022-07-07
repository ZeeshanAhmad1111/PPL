import axios from "axios";
import { IP } from "../Config/config";
//import MailForgot from "./MailForgot";

const Forgot = () => {
  const submit = async (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);

    await axios({
      method: "POST",
      data: formdata,
      url: IP + "/user/forgot",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    })
      .then((res) => {
        if (res.data === "No User with this Email ID Exist") {
          alert(res.data);
          document.getElementById("forgot_form").reset();
        } else {
          alert(res.data.message);
          localStorage.setItem("token", res.data.data);
        }
      })
      .catch((err) => {
        console.log(
          "Forgot details is not send successfully from frontend",
          err
        );
      });
  };

  return (
    <div className="register_sec">
      <h1>Forgot Password</h1>
      <form id="forgot_form" onSubmit={submit}>
        <ul>
          <li>
            <span>Enter E-mail ID</span>
            <input
              type="text"
              name="email"
              placeholder="User@gmail.com"
              required
            />
          </li>
          <li>
            <input type="submit" defaultValue="Submit" />
          </li>
        </ul>
      </form>
      {/* <div><MailForgot /></div> */}
    </div>
  );
};

export default Forgot;
