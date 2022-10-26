import React from 'react';
import validateName from './Name.js';
const Name = () => {
    const [Error, showErrorFunc] = React.useState(false);
    const HandleChange = (event) => {
        (!validateName(event.target.value)) ? showErrorFunc(true) : showErrorFunc(false);
    };
    const ShowError = () => {
        return (
            <div className="invalid-feedback" style={{ display: 'block' }}>Name is required.</div>
        )
    };
    return (
        <div className="form-floating mb-3">
            <input className="form-control" onChange={HandleChange} id="name" type="text" placeholder="Name" />
            <label htmlFor="name">Name</label>
            {Error
                ? <ShowError />
                : ''
            }
        </div>
    );
}
export default Name;