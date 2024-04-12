import React from "react";

const CommentCard = ({comment}) => {
  return (
    <div className="commentCard">
      <img src={comment?.user?.avatar} alt="" />
      <div>
        <div>
          <p>{comment?.user.name}</p>
          <p>@{comment?.user.username}</p>
        </div>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
