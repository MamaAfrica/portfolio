pipeline{
    agent {
        node{
            label 'docker-agent-node'
        }
    }
    stages{
        stage ('Package'){
            steps{
                sh '''
                tar czf portfolio-$BUILD_NUMBER.tar.gz public src deploy.sh
                '''
            }
        }
        stage('Deploy'){
            steps{
                sshPublisher(
                    publishers: [
                    sshPublisherDesc(
                    configName: 'portfolio', 
                    transfers: [sshTransfer(
                    cleanRemote: false, excludes: '', 
                    execCommand: '''sudo rm -rf /var/www/portfolio/portfolio-*.tar.gz 
                    sudo mv /home/ubuntu/portfolio-*.tar.gz /var/www/portfolio/;
                    cd /var/www/portfolio/;
                    sudo tar -xf portfolio-*.tar.gz;
                    sudo chmod +x deploy.sh;
                    echo $PATH;
                    ./deploy.sh; 
                    ''', 
                    execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', 
                    sourceFiles: '**/*.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)
                    ]
                )
            }
        }
    }
}