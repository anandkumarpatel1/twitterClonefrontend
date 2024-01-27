import React from "react";
import "./HomePost.scss";

const CreatePost = () => {
  return (
    <div className="createPost">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Mangekyou_Sharingan_Itachi.svg"
          alt="user"
        />
      </div>
      <div>
        <div>
          <textarea placeholder="What is happing?!"></textarea>
        </div>
        <button>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
