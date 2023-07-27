import React, { useState } from "react";

const BlogForm = () => {
  const [blog, setBlog] = useState({
    id: 10,
    title: "",
    category: "",
    subCategory: "",
    description: "",
    authorName: "",
    cover: '/assets/images/designer-1.jpg',
    createdAt: "June 03, 2021",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "cover" ? files[0] : value;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure all fields are filled
    if (Object.values(blog).every((value) => value !== "")) {
      // Store the blog in local storage
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      setBlog((prevBlog) => ({ ...prevBlog, id: prevBlog.id + 1 }));
      blogs.push(blog);
      localStorage.setItem("blogs", JSON.stringify(blogs));
      // Clear the form after submission
      setBlog({
        id: blog.id + 1,
        title: "",
        category: "",
        subCategory: "",
        description: "",
        authorName: "",
        cover: '/assets/images/designer-1.jpg',
        createdAt: "June 03, 2021",
      });
      alert("Blog successfully saved!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "5px solid #f1f1f1",
        borderRadius: "10px",
        background: "#fff",
        padding: "20px",
        marginTop: "50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: 20,
          color: "#4286f4",
          fontFamily: "Arial, sans-serif",
          borderRadius: "8px",
        }}
      >
        ADD BLOG
      </h1>
      <div
        className="icon"
        style={{
          fontSize: 110,
          display: "flex",
          justifyContent: "center",
          color: "#4286f4",
        }}
      >
        <i className="fas fa-user-circle"></i>
      </div>
      <div
        className="formcontainer"
        style={{ textAlign: "center", margin: "24px 50px 12px" }}
      >
        <div
          className="container"
          style={{ padding: "16px 0", textAlign: "left" }}
        >
          <label htmlFor="title" style={{ fontFamily: "Arial, sans-serif" }}>
            <strong>Title</strong>
          </label>
          <br />
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={blog.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "16px 8px",
              margin: "8px 0",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Arial, sans-serif",
            }}
          />
          <br />
          <label htmlFor="category" style={{ fontFamily: "Arial, sans-serif" }}>
            <strong>Category</strong>
          </label>
          <br />
          <input
            type="text"
            name="category"
            placeholder="Enter Category"
            value={blog.category}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "16px 8px",
              margin: "8px 0",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Arial, sans-serif",
            }}
          />
          <br />
          <label
            htmlFor="subCategory"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <strong>Subcategory</strong>
          </label>
          <br />
          <input
            type="text"
            name="subCategory"
            placeholder="Enter Subcategory (Optional)"
            value={blog.subCategory}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "16px 8px",
              margin: "8px 0",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Arial, sans-serif",
            }}
          />
          <br />
          <label
            htmlFor="description"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <strong>Description</strong>
          </label>
          <br />
          <textarea
            name="description"
            placeholder="Enter Description"
            value={blog.description}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "16px 8px",
              margin: "8px 0",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Arial, sans-serif",
            }}
          ></textarea>
          <br />
          <label
            htmlFor="authorName"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <strong>Author Name</strong>
          </label>
          <br />
          <input
            type="text"
            name="authorName"
            placeholder="Enter Author Name"
            value={blog.authorName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "16px 8px",
              margin: "8px 0",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxSizing: "border-box",
              fontFamily: "Arial, sans-serif",
            }}
          />
          <br />
          
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4286f4",
            color: "white",
            padding: "14px 0",
            margin: "10px 0",
            border: "none",
            cursor: "grab",
            width: "48%",
            borderRadius: "8px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <strong>SUBMIT</strong>
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
