const validate = (req, res, next) => {
    let capitals = new RegExp('(?=.*[A-Z])');
    let numbers = new RegExp('(?=.*[0-9])');
    let Email = new RegExp("[a-zA-Z0-9_\.]+[@]+[a-z]")
    const { email, password } = req.body
    let verifyEmail = Email.test(email)
    let verifyPass = capitals.test(password) && numbers.test(password) && password.length >= 6
    if (verifyEmail && verifyPass) {
        next()
    }
    else {
        return res.status(404).send("credential validation failed")
    }

}

module.exports = validate