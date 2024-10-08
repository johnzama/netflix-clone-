pipeline {
    agent any

    environment {
        // Define the image name
        IMAGE_NAME = "netflix-clone-app"
        // DockerHub credentials ID (you can configure this in Jenkins)
        DOCKERHUB_CREDENTIALS = 'dockerhub_credentials'
    }

    stages {

        stage('Clone Repository') {
            steps {
                // Clone the repository containing your Node.js app and Dockerfile
                git url: 'https://github.com/johnzama/netflix-clone.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image from the Dockerfile
                script {
                    docker.build(IMAGE_NAME)
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                // Run the container to test if it's running correctly
                script {
                    docker.image(IMAGE_NAME).inside {
                        sh 'curl -I http://localhost:8080'
                    }
                }
            }
        }

        stage('Push Docker Image to DockerHub') {
            steps {
                script {
                    // Log in to DockerHub and push the image
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        docker.image(IMAGE_NAME).push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Here you can define deployment steps, for example, SSH into a server and run the Docker container
                echo 'Deploying to server...'
            }
        }
    }

    post {
        always {
            // Clean up any leftover Docker images or containers after the pipeline completes
            cleanWs()
        }
    }
}
