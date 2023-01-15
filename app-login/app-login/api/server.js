require('dotenv').config();
const app = require('./src/app');

const port = process.env.PORT || 3333;

app.listen(port, () => {
    return console.log('Online');
});
