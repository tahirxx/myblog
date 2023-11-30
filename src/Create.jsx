import React from 'react'
import { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDropzone } from 'react-dropzone';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Urji');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const  history = useHistory();

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    setImage(file);

    const url = URL.createObjectURL(file);
    setImageUrl(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      title,
      body,
      author,
    }; 
  
    if (image) {
      requestData.image = image;
    }

    setIsPending(true);

    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    .then(() => {
      console.log('new blog added');
      setIsPending(false);
      history.push('/');
    })  
    .catch((error) => {
      console.error('Error adding blog:', error);
      setIsPending(false);
    });
   
  }

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
        <textarea 
          required
          value={ body }
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Urji</option>
          <option value="yoshi">Shubbee</option>
        </select>

        {/* Use react-dropzone for file upload */}
        <div {...getRootProps()} style={dropzoneStyles}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select an image</p>
        </div>

        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
        <h1>{ title }</h1>
        <p>{ body }</p>
        <p>{ author }</p>
        <img src={ imageUrl } style={imagepreview} />
      </form>
    </div>
  )
}
const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  marginBottom: '8px'
};

const imagepreview = {
  maxWidth: '100%',
  maxHeight: '300px',
  marginBottom: '20px',
}