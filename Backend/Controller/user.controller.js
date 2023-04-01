const User = require("../Models/user.model")
const jwt = require("jsonwebtoken")
const argon2 = require("argon2")


const SIGNUP = async (req, res) => {
    const { userName, email, password, fullName } = req.body;
    console.log(req.body)
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send({ error: 'User already exists' });
        }
        const hashedPassword = await argon2.hash(password);

        user = await User.create({ userName, email, password: hashedPassword, fullName });
        const payload = {
            id: user.id,
            email: user.email,
            userName: user.userName,

        };
        const token = jwt.sign({ ...payload }, process.env.JWT_SECRET,);

        res.status(201).send({ token, ...payload });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}


const LOGIN = async (req, res) => {
    const { userName, password } = req.body;

    try {
        const user = await User.findOne({ userName });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }
        const isMatch = await argon2.verify(user.password, password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }
        const payload = {
            id: user.id,
            email: user.email,
            userName: user.userName,
        };
        const token = jwt.sign({ ...payload }, process.env.JWT_SECRET,);

        res.status(201).send({ token, ...payload });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}




const UPDATEPROFILE = async (req, res) => {
    let { userid } = req.params
    try {
        console.log(req.user, userid)
        if (req.user.id != userid) {
            return res.status(500).send("can not perform this action")
        }
        let { fullName, avatar, password } = req.body
        if (password) {
            password = await argon2.hash(password);
        }
        let update = await User.updateOne({ _id: userid }, { $set: { fullName, password, avatar } })
        return res.status(201).send(update)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}




module.exports = { SIGNUP, LOGIN, UPDATEPROFILE }
