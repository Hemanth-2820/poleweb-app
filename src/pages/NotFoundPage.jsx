import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ paddingTop: '150px', minHeight: '80vh', textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" style={{ color: 'var(--accent-color)' }}>Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
