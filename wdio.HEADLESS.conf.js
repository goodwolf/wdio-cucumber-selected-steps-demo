const wdioConfig = require('./wdio.conf.js');

Object.assign(wdioConfig.config, {
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-infobars',
                '--window-size=1280,800',
                '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
            ],
        },
    }],
});

exports.config = wdioConfig.config;
