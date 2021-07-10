const time = require('./time');
const chalk = require('chalk');

module.exports = (type, msg) => {
    const format = `[${chalk.blueBright(time())}]`;

    switch (type.toLowerCase()) {
        case 'info': {
            return console.log(`${format}: ${chalk.blueBright(type)}: ${msg}`);
        }

        case 'error': {
            return console.log(`${format}: ${chalk.red(type)}: ${msg}`);
        }

        case 'debug': {
            return console.log(`${format}: ${chalk.grey(type)}: ${msg}`);
        }

        case 'warning': {
            return console.log(`${format}: ${chalk.keyword('orange')(type)}: ${msg}`);
        }
    }
};