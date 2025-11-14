import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

function Loginn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    const userdetails = JSON.parse(localStorage.getItem(email));

    if (userdetails && userdetails.password === password) {
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        draggable: true
      });

      // redirect ONLY when login is correct
      window.location.href = '/input';

    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: "Invalid email or password",
      });
    }
  }

  return (
    <div className="container1">
      <div className="container d-flex justify-content-end align-items-center vh-100">
        <div className="card shadow-lg p-4"
          style={{ maxWidth: '500px', width: '100%', borderRadius: '20px' }}>

          <div className="text-center mb-4">
            <h3 className="hed fw-bold" style={{ color: '#F49C19' }}>Welcome Back</h3>
            <p className="head text-muted">Login to continue your journey</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* IMPORTANT — button only, no Link wrapper */}
            <Button
              className="btn w-100"
              style={{ backgroundColor: '#F49C19' }}
              onClick={login}
            >
              LogIn
            </Button>
          </form>

          <div className="text-center mt-3">
            <p className="head mb-1 text-muted">Don't have an account?</p>

            <Link to={'/register'}>
              <Button
                className='reg text-dark'
                style={{ border: '1px solid black', color: 'black' }}
              >
                Register
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Loginn;
