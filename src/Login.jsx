import React, { useState } from 'react';

export default function Login() {
    return (
        <>
        
            <div className='login-container'>
               <div className='inner'>
                <h1>Login</h1>
                <form action="">
                <div className='username'>
                <label htmlFor="">Username:</label>
                    <input type="text" />
                </div>
                <div className='password'>
                <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                <div>
                <button type="submit" className='login'>Login</button>
            </div>
                </form>
            </div>
            </div>
        </>
    );

}

/*
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace 'YOUR_API_ENDPOINT' with the actual endpoint for user authentication
            const response = await fetch('http://localhost:3001/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
      
            if (response.ok) {
              // Authentication successful
              setIsAuthenticated(true);
            } else {
              // Authentication failed
              setError('Invalid username or password');
            }
          } catch (error) {
            console.error('Error during authentication:', error);
            setError('An error occurred during authentication');
          }
        };
    
       
  return (
    <div className='login-container'>
       <h1>Login</h1>
       <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            value={username}
            id='username'
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            value={password}
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div>
                <button type="submit">Login</button>
        </div>
       </form>
       {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
*/
