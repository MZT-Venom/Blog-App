import React from 'react';
import BlogCard from './blogCard';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList'>
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
