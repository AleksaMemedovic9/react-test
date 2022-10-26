
import React from 'react';
import Name from './Name/Name.jsx';
import Email from './Email/Email.jsx';
import Message from './Message/Message';
const Login = () => {
    return (
        <div className="container-fluid px-5 my-5">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                    <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-sm-6 d-none d-sm-block bg-image"></div>
                                <div className="col-sm-6 p-4">
                                    <div className="text-center">
                                        <div className="h3 fw-light">Contact Form</div>
                                        <p className="mb-4 text-muted">Split layout contact form</p>
                                    </div>
                                    <form id="contactForm">
                                        <Name />
                                        <Email />
                                        <Message />
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;