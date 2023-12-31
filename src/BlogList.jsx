import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
   
     return ( 
      <div>
       <h1 className="title">{title}</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
         <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
               <img src={ blog.img } />
               <h2>{blog.title}</h2>
               <p>Written by { blog.author }</p>
            </Link>
         </div>   
         ))}
      </div> 
      </div>  
     );
};
 
export default BlogList;