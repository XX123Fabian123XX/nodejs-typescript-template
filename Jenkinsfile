def remote = [:]
remote.name = "test"
remote.host = "159.69.108.3"
remote.allowAnyHosts = true

node {
    def app

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        checkout scm
        app = docker.build("fabianwinkelmann2001/app")
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("latest")
        }
    }
    
    withCredentials([sshUserPrivateKey(credentialsId: 'server', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'root')]) {
        remote.user = root
        remote.identityFile = identity
        stage("SSH Steps Rocks!") {
            sshCommand remote: remote, command: 'docker-compose -f /home/nodejs-basic/docker-compose.yml up -d --build'
        }
    }
}
