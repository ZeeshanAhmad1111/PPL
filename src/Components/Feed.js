import React, { useEffect } from "react";
import axios from "axios";
import { IP } from "../Config/config";

const Feed = ({ posts, setPosts }) => {
  useEffect(() => {
    axios
      .get(IP + "/post/posts")
      .then((jsonPost) => {
        setPosts(jsonPost.data);
        console.log(jsonPost.data);
      })
      .catch((err) => {
        console.log("feed.js>>>".err);
      });
  }, [setPosts]);

  return (
    <>
      {/* <div className="contnt_1">
        <div className="list_1">
          <ul>
            <li>
              <input type="checkbox" className="chk_bx" />
              Friends
            </li>
            <li>
              <input type="checkbox" className="chk_bx" />
              Flaged
            </li>
          </ul>
        </div>
        <div className="post_div">
          <div className="post_list">
            <ul>
              <li>
                <a href="#">
                  <span className="list_img">
                    <img src="/images/img_1.png" />
                  </span>
                  Latest First
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_img">
                    <img src="/images/img_2.png" />
                  </span>
                  Oldest First
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_img">
                    <img src="/images/img_3.png" />
                  </span>
                  Most Pet
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_img">
                    <img src="/images/img_4.png" />
                  </span>
                  Most Clicks
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_img">
                    <img src="/images/img_5.png" />
                  </span>
                  Most Commented
                </a>
              </li>
            </ul>
          </div>
          <div className="post_txt">4 New Post Updates</div>
        </div>
      </div> */}
      {posts
        .slice(0)
        .reverse()
        .map((post) => (
          <div className="contnt_2">
            <div className="div_a">
              <div className="div_title">{post.title}</div>
              <div className="btm_rgt">
                <div className="btm_arc">{post.category}</div>
              </div>
              <div className="div_top">
                <div className="div_top_lft">
                  <img src="/images/img_6.png" alt="" />
                  {post.userName}
                </div>
                <div className="div_top_rgt">
                  <span className="span_date">{post.date}</span>
                  <span className="span_time">{post.time}</span>
                </div>
              </div>
              <div className="div_image">
                <img src={IP + "/" + post.image} alt="pet" />
              </div>
              <div className="div_btm">
                <div className="btm_list">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="/images/icon_001.png" alt="share" />
                        </span>
                        Share
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="/images/icon_002.png" alt="share" />
                        </span>
                        Flag
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="/images/icon_004.png" alt="share" />
                        </span>
                        4 Comments
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="/images/icon_003.png" alt="share" />
                        </span>
                        Likes
                      </a>
                    </li>
                    <div className="like_count" style={{ marginRight: 10 }}>
                      <span className="lft_cnt" />
                      <span className="mid_cnt">10</span>
                      <span className="rit_cnt" />
                    </div>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="/images/icon_003.png" alt="share" />
                        </span>
                        Unlike
                      </a>
                    </li>
                    <div className="like_count">
                      <span className="lft_cnt" />
                      <span className="mid_cnt">4</span>
                      <span className="rit_cnt" />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Feed;
