const validateMessage = (message) => {
    const pattern = /^[a-zA-Z0-9]/;
    let result = (!pattern.test(message)) ? false : true;
    return result
}
export default validateMessage;