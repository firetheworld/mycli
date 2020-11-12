const {promisify} = require('util');
const chalk = require('chalk');
const figlet = promisify(require('figlet'));
const clear = require('clear');

module.exports = async (name) => {
    clear();
    const data = await figlet(`welcome ${name}`);
    console.log(chalk.green(data));
}