const bcrypt = require('bcryptjs');

const hasher = {
    hash: (data) => {
        return bcrypt.hashSync(data, 8);
    },
    isMatch: (data, hashedData) => {
        return bcrypt.compareSync(data, hashedData);
    },
};

module.exports = hasher;

/*
const myFunction = async () => {
    const password = 'rlehdeo2113!';
    const hashedPassword = await bcrypt.hash(password, 8);

    const isMatch = await bcrypt.compare(password, hashedPassword);
const isMatch = bcrypt.compare(password, hashedPassword);
}
*/