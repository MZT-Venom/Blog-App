import React from 'react'
import Header from '../components/header'
import BlogForm from '../components/createBlog'
import '../components/styles.css'
import { Link } from 'react-router-dom';

const CreateBlogPage = () => {
  return (
    <div>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
        <Header/>
        <BlogForm/>
    </div>
  )
}

export default CreateBlogPage