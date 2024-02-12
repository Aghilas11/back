import axios from "axios";
import React from "react";

const DeletPost = ({ postId }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:5000/post/" + postId);
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#128502;
    </span>
  );
};

export default DeletPost;
