import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/header";
import EmptyList from "../components/emptyList";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blog data from the API based on the given id
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4000/getBlogsById/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          console.error("Error fetching blog:", response.status);
          setBlog(null);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      <Header />
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
          </header>
          <img src={`http://localhost:4000/images/${blog.cover}`} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default BlogPage;
