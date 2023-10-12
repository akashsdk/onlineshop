import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tasnim Shahriar Akash | All rights reserved</p>
      </div>
    </footer>
    </div>
  )
}
