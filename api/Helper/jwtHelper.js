
const jwt = require('jsonwebtoken');
const crypto = require('crypto')
async function encrypt(data, nb) {
    return await bcrypt.hash(data, nb);
}

async function encryptPassword(password) {
    console.log(password);
    let test=crypto.createHash('sha1').update(password).digest('hex');
    console.log(test+ " netyyyyyy password");
    return test;
}

function generateToken(user) {
    return jwt.sign(
        { user: user },
        'secret',
        {
            expiresIn: "24h",
        }
    );
}

function decode(token) {
    try {
        var decoded = jwt.verify(token, 'secret');
        return decoded;
    } catch (err) {
        // console.log(err);
        throw new Error("token invalid");
    }
}

module.exports = { encrypt, encryptPassword, generateToken, decode };