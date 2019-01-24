// module.exports = {
//     apps: [{
//         name: 'Pet-Info',
//         script: './server/server.js'
//     }],
//     deploy: {
//         production: {
//             user: 'ubuntu',
//             host: 'ec2-52-90-48-243.compute-1.amazonaws.com',
//             key: '~/.ssh/Petsy_Info_Service_Keys.pem',
//             ref: 'origin/master',
//             repo: 'https://github.com/mnutt346/Pet-Info.git',
//             path: '/home/ubuntu/Pet-Info',
//             'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
//         }
//     }
// }

module.exports = {
    apps: [{
        name: 'pet-info',
        script: './server/server.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-13-59-91-25.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/petsy2.pem',
            ref: 'origin/master',
            repo: 'git@github.com:Petsy2/Pet-Info.git',
            path: '/home/ubuntu',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}

