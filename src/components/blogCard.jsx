import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const BlogCard = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogCard-wrap">
      <img className="blogCard-cover" src={cover} alt="cover" />
      <p className="chip">{category}</p>;<h3>{title}</h3>
      <p className="blogCard-desc">{description}</p>
      <footer>
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>

        <Link className="blogCard-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogCard;
