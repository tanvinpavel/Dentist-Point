import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Register.css'
import useAuth from "../../hooks/useAuth";
import {updateProfile, getAuth} from "firebase/auth";
import { useHistory, useLocation } from "react-router";

const Login = () => {

  const {newAccount, error, setUser, setError, setIsLoading} = useAuth();

  const { register, handleSubmit, formState: { errors }} = useForm();
  const auth = getAuth();
  const history = useHistory();
  const location = useLocation();

  const [validationError, setValidationError] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const { from } = location.state || { from: { pathname: "/" } };

  console.log(from)

  //login with email and password
  const onSubmit = data => {
    const {name,email, password, reEnterPass} = data;


    const setUserName = (name) => {
      updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {
        console.log(auth.currentUser)
        console.log(result.user)
      })
      .catch(() => {});
    }

    if(password === reEnterPass){
      setValidationError('')
      if(password.length >= 6){
        setPasswordValidation('')

        newAccount(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          setUserName(name);
          history.push(from)
          setError('');

          window.location.reload();
        })
        .finally(() => setIsLoading(false));
      }else{
        setPasswordValidation('Password must be at last 6 character')
      }
    }else{
      setValidationError('Please check both password are same')
    }
  };


  return (
    <div className="container d-flex justify-content-center">
      <div>
        <div className="card my-5 shadow-lg" style={{ width: "38rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center">Sign up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputUserName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUserName"
                  aria-describedby="emailHelp"
                  {...register("name")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-danger">This field is required.</span>}
                {validationError && <span className="text-danger">{validationError}</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Re-Enter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  {...register("reEnterPass", { required: true })}
                />
                {errors.reEnterPass && <span className="text-danger">This field is required.</span>}
                {validationError && <span className="text-danger">{validationError}</span>}
                {passwordValidation && <span className="text-danger">{passwordValidation}</span>}
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-warning">
                  Submit
                </button>
              </div>
              <div className="form-text">
                Already registered? <Link to="/login">Log in</Link>
              </div>
              {error && <div className="form-text text-center text-danger">
                <span>{error}</span>
              </div>}
            </form>
          </div>
        </div>

        <div className="divider mb-4">
            <hr /> <h5>or</h5> <hr />
        </div>

        <div className="d-grid gap-2 col-6 mx-auto mb-5">
          <button className="btn btn-outline-dark" type="button">
            <span className="me-2"><i className="fab fa-google"></i></span>
            Login with Google
          </button>
          <button className="btn btn-outline-dark fb" type="button">
            <span className="me-2 fb-icon"><i className="fab fa-facebook-f"></i></span>
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;