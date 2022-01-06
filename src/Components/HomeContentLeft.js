import React, { useState } from "react";
import Feed from "./Feed";
import Welcome from "./Welcome";

const HomeContentLeft = () => {
  const [posts, setPosts] = useState([]);
  const[isLogin, setIsLogin] = useState(false);

  return (
    <div>
           {isLogin?<Welcome />:<Feed posts={posts} setPosts={setPosts} />}
    </div>
  );
};

export default HomeContentLeft;
