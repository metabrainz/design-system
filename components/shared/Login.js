import React from 'react';

const Login = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card">
              <img
                alt="..."
                className="card-img-top"
                src="/"
              />
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center">
                    Login to Your Account
                  </h5>
                  <p className="text-center small">
                    Enter your username & password to login
                  </p>
                </div>
                <form className="row needs-validation" noValidate>
                  <div className="col-12">
                    <label className="form-label" htmlFor="yourUsername">
                      Username
                    </label>
                    <div className="input-group has-validation">
                      <span
                        className="input-group-text box-bg"
                        id="inputGroupPrepend"
                      >
                        @
                      </span>
                      <input
                        className="form-control"
                        id="yourUsername"
                        name="username"
                        required
                        type="text"
                      />
                      <div className="invalid-feedback">
                        Please enter your username.
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="yourPassword">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="yourPassword"
                      name="passwword"
                      required
                      type="password"
                    />
                    <div className="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        id="rememberMe"
                        name="remember"
                        type="checkbox"
                        value="true"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                      Login
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">
                      Do not have account?
                        <a> Create an account</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
