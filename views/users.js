const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname: {
        type: 'String',
        require: true,
    },
    lastname: {
        type: 'String',
        require: true,
    },
    email: {
        type: 'String',
        require: true,
        unique: true,
    },
    password: {
        type: 'String',
        require: true,
    }
})

//prevent duplicate email
userSchema.statics.isThisEmailInUse = async function(email) {
    if (!email) throw new Error('Invalid Email');
    try {
        const user = await this.findOne({ email });
        if (user) return false;
        return true;
    } catch (error) {
        console.log('error inside isThisEmailInUse method', error.message)
        return false
    }
}
module.exports = mongoose.model('User', userSchema);