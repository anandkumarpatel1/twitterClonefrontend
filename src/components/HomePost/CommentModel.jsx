import React, { useState } from "react";
import CommentCard from "./CommentCard";
import axios from "axios";
import { toast } from "react-toastify";

const CommentModel = ({ comments, id, commentHandler }) => {
  const [comment, setComment] = useState('');

  const submitHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("=")[1]}`,
        },
        withCredentials: true,
        sameSite: "None",
      };

      const { data } = await axios.post(
        `https://backendtwitter.vercel.app/api/v1/users/comment/${id}`,
        { comment },
        config
      );

      if(data){
        comments.push(data?.comment)
      }
      toast.success(data.message)
      setComment('')
      commentHandler()
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  return (
    <div className="comment">
      <div>
        <input
          type="text"
          placeholder="Add comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitHandler}>submit</button>
      </div>
      {comments && comments?.length < 1 && (
        <>
          <p style={{ paddingLeft: "30px" }}> No comments found</p>
        </>
      )}
      {comments &&
        comments?.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
    </div>
  );
};

export default CommentModel;
