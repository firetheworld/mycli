const {promisify} = require('util');
const chalk = require('chalk');
const figlet = promisify(require('figlet'));
const clear = require('clear');

const download = require('./downloadRepo');

module.exports = async (name) => {
    clear();
    const data = await figlet(`welcome ${name}`);
    console.log(chalk.green(data));

    await download("direct:https://github.com/firetheworld/large-number", './', { clone: true });
}