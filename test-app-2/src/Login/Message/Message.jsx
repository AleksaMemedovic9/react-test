import React from 'react';
import validateMessage from './Message.js';
const Message = () => {
    const [Error, showErrorFunc] = React.useState(false);
    const HandleChange = (event) => {
        (!validateMessage(event.target.value)) ? showErrorFunc(true) : showErrorFunc(false);
    };
    const ShowError = () => {
        return (
            <div className="invalid-feedback" style={{ display: 'block' }}>Message is required.</div>
        )
    };
    return (
        <div className="form-floating mb-3">
            <textarea className="form-control" id="message" onChange={HandleChange} type="text" placeholder="Message"></textarea>
            <label htmlFor="message">Message</label>
            {Error
                ? <ShowError />
                : ''
            }
        </div>
    );
}
export default Message;