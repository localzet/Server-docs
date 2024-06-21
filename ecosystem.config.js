module.exports = {
    apps: [{
        name: "Localzet Docs",
        port: 6001,
        exec_mode: 'cluster',
        instances: 'max',
        script: "npm",
        args: "start"
    }]
}
