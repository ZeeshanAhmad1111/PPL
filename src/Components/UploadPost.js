import axios from "axios";

const UploadPost = () => {
  const submit = async (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    console.log("FORMDATA----\n", formdata);
    formdata.append("_id", localStorage.getItem("userId"));
    await axios({
      method: "POST",
      data: formdata,
      url: "http://localhost:3001/post/upload",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
    })
      .then((res) => {
        console.log("post details is send successfully from frontend");
      })
      .catch((err) => {
        console.log("Post details is not send successfully from frontend");
      });
  };
  return (
    <form onSubmit={submit}>
      <ul>
        <li>
          <label>Title</label>
          <input type="text" name="title" placeholder="Enter the title"required/>
        </li>
        <li>
          <label>Category</label>
          <select name="category">
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
            <option value="birds">Birds</option>
            <option value="rabbits">rabbits</option>
            <option value="others">Others</option>
          </select>
        </li>
        <li>
          <label>Image:</label>
          <input type="file" name="image" required/>
        </li>
        <li>
          <input type="submit" Value="Upload Post" />
        </li>
      </ul>
    </form>
  );
}

export default UploadPost;