const Validation = (userName = "",firstName = "",lastName = "",email = "",passWord = "") => {
    let errors = [];
      if(userName !== ""){
          if(userName.length < 8 || userName.length > 15){
        errors.push("The Length of User Name is not in range (8-15)");
      }}
      console.log(errors)
  return errors;
};

export default Validation;
