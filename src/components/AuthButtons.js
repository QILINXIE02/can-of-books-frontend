// src/components/AuthButtons.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <Button variant="danger" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </Button>
      ) : (
        <Button variant="primary" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;
