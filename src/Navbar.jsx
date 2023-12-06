
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav> 
     <div className='hero'>
      <h1>Nurturing Bonds</h1>
      <h3>A sanctuary for Mothers in the Digital Realm</h3>
     </div>
     </>
  );
}
