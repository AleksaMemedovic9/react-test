const validateName = (name) => {
    const pattern = /^[a-zA-Z0-9]/;
    let result = (!pattern.test(name)) ? false : true;
    return result
}
export default validateName;