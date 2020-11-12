const {promisify} = require('util');
const download = promisify(require('download-git-repo'));
const ora = require('ora');

module.exports = (url, path) => {
    const process = ora('下载中');
    process.start();
    download(url, path).then(() => {
        process.succeed();
    }).catch(() => {
        process.fail();
    });
    
}