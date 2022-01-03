import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom"
import { useForm } from "react-hook-form";
import { login } from '../firebase/auth';

function Login(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  let hello = useNavigate(props);

  const onSubmit = async (data) => {
    let user;
    try {
      user = await login(data);
      reset();
    } catch(error) {
      console.log(error)
    }
    if (user) {
      hello(`/profile/${user.uid}`);
    }
    else {
      setLoading(false)
    }
  }

  const formClassName = `ui form ${isLoading ? 'loading' : '' }`;

  return (
    <>
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>
                Email
                <input type="email" name="email" placeholder="Email" {...register("email", {
                      required: "Required",
                    })} />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password" {...register("password", {
                      required: "Required",
                    })} />
              </label>
            </div>
            <div className="field actions">
              <button className="ui primary button login" type="submit">
                Login
              </button> or 
              <Link to ="/signup">Sing up</Link>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Login;