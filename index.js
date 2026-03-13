const env = process.env.NODE_ENV || 'dev';

const config = {
    dev: require('./dev'),
    prod: require('./prod'),
    release: require('./release')
};

module.exports = config[env];