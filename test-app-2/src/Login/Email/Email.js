const emailExists = (email) => {
    const pattern = /^[a-zA-Z0-9]/;
    let result = (!pattern.test(email)) ? false : true;
    return result
}
const emailIsValid = (email) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let result = (!pattern.test(email)) ? false : true;
    return result
}

export { emailExists, emailIsValid };