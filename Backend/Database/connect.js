const { mongoose } = require('mongoose')


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connect = async () => {

    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb+srv://mohitindoriya:mohit123@cluster0.adpktjz.mongodb.net/?retryWrites=true&w=majority`, connectionParams)
            .then(res => {

                resolve('Connected')
            })
            .catch((err) => {
                console.log(err.message);
                reject('Not Connected')
            })
    })

}


module.exports = { connect };
