import {useState} from "react";
import UploadPost from "./UploadPost";

const Upload = () => {
    const [flag, setFlag] = useState(false);
    function handleClick(){
      setFlag(flag?false:true);
    }
  return (
    <div>
      <div className="rght_btn">
        {" "}
        <span className="rght_btn_icon">
          <img src="images/btn_iconb.png" alt="up" />
        </span>{" "}
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>{" "}
        <a href="#" onClick={handleClick}>
          Upload Post
        </a>{" "}
        <div>{flag ? <UploadPost /> : ""}</div>
      </div>
      <div className="rght_btn">
        {" "}
        <span className="rght_btn_icon">
          <img src="images/btn_icona.png" alt="up" />
        </span>{" "}
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>{" "}
        <a href="#">Invite Friends</a>{" "}
      </div>
    </div>
  );
};

export default Upload;