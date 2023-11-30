import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

export default function BlogDetails() {
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:3001/blogs/' + id );
    const history = useHistory();

    const handleClick= ()=> {
      fetch('http://localhost:3001/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })  
    }
    
    return (
    <div className='blog-details'>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  )
}
