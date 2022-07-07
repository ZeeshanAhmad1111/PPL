import React from "react";
import { Link } from "react-router-dom";

const MailSignUp = () => {
  return (
      <div className="popup_sec" id="pop_forgt">
        <div className="clos_btn">
          <img src="/images/clos.png" alt="" id="clos_pop" />
        </div>
        <div className="pop_hdr">
          A mail has been send to your e-mail Id for Email Address Verification
        </div>
        <div className="man_contnt">
          <span>Please Check Your Mail Box!</span>
          <Link to="/"><input type="submit" Value="OK" /></Link>
        </div>
      </div>
  );
}

export default MailSignUp;