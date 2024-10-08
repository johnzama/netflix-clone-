pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/johnzama/netflix-clone.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('netflix-clone-app')
                }
            }
        }

        stage('Deploy Docker Container') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 netflix-clone-app'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

