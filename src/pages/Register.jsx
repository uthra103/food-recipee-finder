import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

function Register() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function register() {

    // Check if email already exists
    const existingUser = localStorage.getItem(email);

    if (existingUser) {
      Swal.fire({
        icon: "error",
        title: "Email Already Exists!",
        text: "This email is already registered. Please use another email.",
      });
      return;
    }

    // Save new user
    const userdetails = { name, email, password, phone };
    localStorage.setItem(email, JSON.stringify(userdetails));

    Swal.fire({
      title: "Registration Completed!",
      icon: "success"
    });

    window.location.href = '/login';
  }

  return (
    <div className="container1">
      <div className="container d-flex justify-content-end align-items-center vh-100">
        <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '20px' }}>
          <div className="text-center mb-4">
            <h3 className="hed fw-bold" style={{ color: '#F49C19' }}>Sign up to taste the Difference</h3>
            <p className="head text-muted">Register today and explore a world of flavors</p>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
              <label className="form-label fw-semibold">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter mobile number"
                required
                onChange={(e) => setPhone(e.target.value)}
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

            <button
              type="button"
              className="btn w-100"
              style={{ backgroundColor: '#F49C19' }}
              onClick={register}
            >
              Register
            </button>
          </form>

          <div className="text-center mt-3">
            <p className="head mb-1 text-muted">Already have an account?</p>
            <Link to={'/login'}>
              <Button
                className='reg text-dark'
                style={{ border: '1px solid black', color: 'black' }}
              >
                LogIn
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;