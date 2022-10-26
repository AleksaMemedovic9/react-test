import React from 'react';
import {emailExists, emailIsValid} from './Email.js';
const Email = () => {
    const [Error, showErrorFunc] = React.useState(false);
    const [ErrorMessage, setErrorMessage] = React.useState('');
    const HandleChange = (event) => {
        if(!emailExists(event.target.value)){
            showErrorFunc(true);
            setErrorMessage('Email is required');
        }
        else if(!emailIsValid(event.target.value)){
            showErrorFunc(true);
            setErrorMessage('Email is not valid');
        }
        else{
            showErrorFunc(false);
            setErrorMessage('');
        }
    };
    const ShowError = () => {
        return (
            <div className="invalid-feedback" style={{ display: 'block' }}>{ErrorMessage}.</div>
        )
    };
    return (
        <div className="form-floating mb-3">
            <input className="form-control" id="emailAddress" onChange={HandleChange} type="email" placeholder="Email Address" />
            <label htmlFor="emailAddress">Email Address</label>
            {Error
                ? <ShowError />
                : ''
            }
        </div>
    );
}
export default Email;