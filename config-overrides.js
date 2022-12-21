const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components' : 'src/components',
        '@ui': 'src/components/UI',
        '@constants' : 'src/constants',
        '@containers' : 'src/containers',
        '@hoc-helpers' : 'src/hoc-helpers',
        '@services' : 'src/services',
        '@styles' : 'src/styles',
        '@utils' : 'src/utils',
        '@routes': 'src/routes',
        '@static' : 'src/static',
        '@hooks' : 'src/hooks',
        '@store' : 'src/store',
        '@context' : 'src/context'
    })(config)
    return config;
}