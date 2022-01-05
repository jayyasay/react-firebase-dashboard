import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from "react-router-dom"
import { useForm } from "react-hook-form";
import { signup } from '../firebase/auth';

function Signup(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  let hello = useNavigate(props);

  const onSubmit = async (data) => {
    let newUser;
    try {
      newUser = await signup(data);
      reset();
    } catch(error) {
      console.log(error)
    }
    if (newUser) {
      hello(`/profile/${newUser.uid}`);
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
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "Required",
                    })}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input type="text" name="lastName" placeholder="Last Name"  {...register("lastName", {
                      required: "Required",
                    })} />
                </label>
              </div>
            </div>
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
                    })} autoComplete='autocomplete'/>
              </label>
            </div>
            <div className="field actions">
              <button className="ui primary button login" type="submit">
                Sign up
              </button> or 
              <Link to ="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
}

export default Signup;