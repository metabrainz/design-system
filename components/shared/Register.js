import React from 'react';

const Register = (props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center">
                    Create an Account
                  </h5>
                  <p className="text-center small">
                    Enter your personal details to create account
                  </p>
                </div>

                <form className="row g-3 needs-validation" noValidate>
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
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="yourEmail">
                      Your Email
                    </label>
                    <input
                      className="form-control"
                      id="yourEmail"
                      name="email"
                      required
                      type="email"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid Email adddress!
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="yourPassword">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="yourPassword"
                      name="password"
                      required
                      type="password"
                    />
                    <div className="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="yourPassword">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      id="yourPassword"
                      name="password"
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
                        id="acceptTerms"
                        name="terms"
                        required
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label" htmlFor="acceptTerms">
                        I agree and accept the{' '}
                        <a href="#">Terms and Conditions</a>
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                      Create Account
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="small mb-0">
                      Already have an account?
                      <a> Log in</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 align-items-center justify-content-center">
            <div className="card" style={{height: '595px'}}>
              <img
                alt="All Projects"
                className="card-img-top"
                src={props.cover}
              />
              <div className="card-body">
                <p className="card-text">
                  <b>
                    Note that any contributions you make to MetaBrainz will be
                    released into the Public Domain and/or licensed under a
                    Creative Commons by-nc-sa license.
                    <br />
                    <br />
                    Furthermore, you give the MetaBrainz Foundation the right to license this data for commercial use.
                  </b>
                  <br />
                  <br />
                  MusicBrainz believes strongly in the privacy of its users!
                  <br />
                  <br />
                  Any personal information you choose to provide will not be sold or shared with anyone else. For full details, please read our Privacy Policy.
                  <br />
                  <br />
                  You may remove your personal information from our services
                  anytime by deleting your account. For more details, see our
                  GDPR compliance statement.
                </p>
                <br />
                <p className="card-text">
                  <small className="text-muted">
                    Please read our license page for more details.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
