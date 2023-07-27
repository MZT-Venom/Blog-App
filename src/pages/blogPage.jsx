import '../components/styles.css';
import EmptyList from '../components/emptyList';
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { useParams } from 'react-router';
import { blogList } from '../data';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blogs from local storage and combine with the blogList
    const localStorageBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const combinedBlogs = [...blogList, ...localStorageBlogs];

    // Find the specific blog with the given id
    let foundBlog = combinedBlogs.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id]);

  return (
    <>

      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      <Header/>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default BlogPage;
