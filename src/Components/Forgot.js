import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    console.log("FORMDATA----\n", formdata);

    await axios({
      method: "POST",
      data: formdata,
      url: "http://localhost:3001/user/forgot",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    })
      .then((res) => {
        console.log("Forgot details is send successfully from frontend");
        if (res.data === "User Not Found") {
          console.log(res.data);
          alert("User not found");
          document.getElementById("forgot_form").reset();
        } else {
          console.log(res.data);
          localStorage.setItem("emailId",e.target.email.value);
          navigate("/reset");
        }
      })
      .catch((err) => {
        console.log("Forgot details is not send successfully from frontend");
      });
  };

  return (
    <div className="register_sec">
      <h1>Forgot Password</h1>
      <form id="forgot_form" onSubmit={submit}>
        <ul>
          <li>
            <span>Enter E-mail ID</span>
            <input type="text" name="email" placeholder="User@gmail.com" />
          </li>
          <li>
              <input type="submit" defaultValue="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
}
